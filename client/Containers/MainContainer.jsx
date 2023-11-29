import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";
import { NodeIDContainer } from "./NodeIDContainer";


//possibly delete button on line 36?
const MainContainer = () => {
    const [replicaSets,  setReplicaSets] = useState([]);
    const [selectedRS, setSelectedRS] = useState('');
    const [abnormalNode, setAbnormalNode] = useState(null);
    const [medianTime, setMedianTime] = useState('');
    const [watchInterval, setWatchInterval] = useState(null);

    // const query = () => {
    //     const url = '/query/container_cpu_usage_seconds_total'
    //     console.log(url)
    //     //http://localhost:3000/query/up
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('info').innerText = JSON.stringify(data, null, 2);
    //     })
    //     .catch(err => console.log('ERROR:', err))
    // }

    useEffect(() => {
        function getRS() {
            fetch('/loadRS')
            .then(response => response.json())
            .then(data => {
                setReplicaSets(data.result);
                document.getElementById('info').innerText = JSON.stringify(data.result, null, 2);
            })
            .catch(err => console.log('ERROR:', err))
        }
        getRS();
    }, [])

    const handleWatchButtonClick = () => {
        if(watchInterval){
            clearInterval(watchInterval);
            setWatchInterval(null)
            setAbnormalNode(null)
            setMedianTime("")
        } else {
            handleAbnormalNode();
            const intervalId = setInterval(()=> {
                handleAbnormalNode();
            },3000);
            setWatchInterval(intervalId);
        }
    };

    const handleAbnormalNode = () => {
        fetch(`/query/${selectedRS}`)
        .then(response => response.json())
        .then(data => {
        if(data.abnormalNodeFound === true){
            setAbnormalNode(data.result)
            setMedianTime(data.median)
            clearInterval(watchInterval);
            setWatchInterval(null);
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