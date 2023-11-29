import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";
import { NodeIDContainer } from "./NodeIDContainer";
import logo from '../images/Logo.png';

//possibly delete button on line 36?
const MainContainer = () => {
    const [replicaSets,  setReplicaSets] = useState([]);
    const [selectedRS, setSelectedRS] = useState('');
    const [abnormalNode, setAbnormalNode] = useState('');
    const [medianTime, setMedianTime] = useState('');
    const [watchInterval, setWatchInterval] = useState(null);

    const query = () => {
        const url = '/query/container_cpu_usage_seconds_total'
        console.log(url)
        //http://localhost:3000/query/up
        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('info').innerText = JSON.stringify(data, null, 2);
        })
        .catch(err => console.log('ERROR:', err))
    }

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
            setAbnormalNode("")
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
            clearInterval(watchInterval);
            setWatchInterval(null);
        }else{
        setAbnormalNode(data.result)
        setMedianTime(data.median)}
        })
        .catch(err => console.log('ERROR:', err))
    }

        return (
            <>
                <Container >
                    <div id='title'>
                        <img src={logo} alt="" width={100} height={100}/>
                    </div>
                    
                    <DropDownContainer selectedRS={selectedRS} setSelectedRS={setSelectedRS} replicaSets={replicaSets}/>
                </Container>
                <Container>
                  <h1>
                    {selectedRS}
                  </h1>
                  <h1>
                    {abnormalNode}
                  </h1>
                  <h1>
                    {medianTime}
                  </h1>
                    <Router>
                        <div id="watchContainer"><Button className="watchButton" onClick={handleWatchButtonClick}>{watchInterval ? "Stop Watching" : "Start Watching"}</Button></div>
                        <NodeIDContainer />
                        <Button onClick={query}/>
                        <LogContainer />
                    </Router>
                   
                </Container>
            </>
        )
}

export default MainContainer;