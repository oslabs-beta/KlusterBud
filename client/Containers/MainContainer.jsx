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
    const [selectedRS, setSelectedRS] = useState('')

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
    
        return (
            <>
                <Container >
                    <div><h1 id='title'>KLUSTERBUD is the Best!</h1> </div>
                    
                    <DropDownContainer selectedRS={selectedRS} setSelectedRS={setSelectedRS} replicaSets={replicaSets}/>
                </Container>
                <Container>
                  <h1>
                    {selectedRS}
                  </h1>
                    <Router>
                        <div id="watchContainer"><Button className="watchButton" onClick={() => console.log('Start Watching Button Functionality')}>Start Watching</Button></div>
                        <NodeIDContainer />
                        <Button onClick={query}/>
                        <LogContainer />
                    </Router>
                   
                </Container>
            </>
        )
}

export default MainContainer;