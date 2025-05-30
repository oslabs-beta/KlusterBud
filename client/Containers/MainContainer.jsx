import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // not using axios just yet, possible iteration
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";
import { NodeIDContainer } from "./NodeIDContainer";



const MainContainer = () => {
    const [replicaSets,  setReplicaSets] = useState([]); //array of names of replica sets in our cluster
    const [selectedRS, setSelectedRS] = useState(''); //the name of the replica set selected by the user from the dropdown
    const [abnormalNode, setAbnormalNode] = useState(null); //the name of the node behaving abnormally(within our selected replica set)
    const [medianTime, setMedianTime] = useState(''); //the median cpu response time from nodes in our selected replica set
    const [watchInterval, setWatchInterval] = useState(null); //indicates whether we should be actively watching (we watch by fetching repeatedly at an interval)


    useEffect(() => {
        //the getRS function sends a request to /loadRS, and expects an array of replica set names as a response.
        function getRS() {
            fetch('/loadRS')
            .then(response => response.json())
            .then(data => {
                //we then use the setReplicaSet setter function to set this piece of state to that array of replica set names.
                setReplicaSets(data.result);
                document.getElementById('info').innerText = JSON.stringify(data.result, null, 2);
            })
            .catch(err => console.log('ERROR:', err))
        }
        getRS();
    }, [])


    const handleWatchButtonClick = () => {
        if(watchInterval){ // if detects the anomaly stops repeating
            clearInterval(watchInterval); // to stop repeating 
            setWatchInterval(null) // set the interval back to null 
            setAbnormalNode(null)
            setMedianTime("")
        } else {
            handleAbnormalNode();
            const intervalId = setInterval(()=> {
                handleAbnormalNode();
            },3000); // every 3s its repeating the functionallity 
            setWatchInterval(intervalId);  // set the state of watchInterval to intervalId so it stops iterating
        }
    };

    const handleAbnormalNode = () => {
        fetch(`/query/${selectedRS}`)
        .then(response => response.json())
        .then(data => {
        if(data.abnormalNodeFound === true){
            setAbnormalNode(data.result) // sets the result state to the abnormal it found
            setMedianTime(data.median)
            clearInterval(watchInterval); // stops repeating reading through
            setWatchInterval(null); // set state back to null (false)
        }else{
        setAbnormalNode(data.result)
        setMedianTime(data.median)}
        })
        .catch(err => console.log('ERROR:', err))
    }

        return (
            <Container id="MainContainer">
                <Container>
                    <DropDownContainer selectedRS={selectedRS} setSelectedRS={setSelectedRS} replicaSets={replicaSets}/>
                    <div id="watchContainer"><Button className="watchButton" onClick={handleWatchButtonClick}>{watchInterval ? "Stop Watching" : "Start Watching"}</Button></div>
                </Container>
                <Container id="infoContainer">
                    <Router>
                        <NodeIDContainer abnormalNode={abnormalNode}/>
                        <LogContainer medianTime={medianTime} abnormalNode={abnormalNode} />
                    </Router>
                </Container>
            </Container>
        )
}

export default MainContainer;