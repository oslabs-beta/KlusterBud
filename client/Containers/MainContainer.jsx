import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";
import { NodeIDContainer } from "./NodeIDContainer";

//possibly delete button on line 24?
const MainContainer = () => {
<<<<<<< HEAD
    const [value, setValue] =useState('')
    const [responseData, setResponseData] =useState(null)
=======
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
>>>>>>> 547c5e13ff3ece2ba2a3d42fd95f50c6f8a07d2f
    return (
    <>
        <Container >
            <div><h1 id='title'>KLUSTERBUD is the Best!</h1> </div>
            
            <DropDownContainer key1={'value'} key2={'value'} key3={'value'}/>
        </Container>
        <Container>
          
            <Router>
<<<<<<< HEAD
                <div id="watchContainer"><Button className="watchButton" onClick={() => console.log('Start Watching Button Functionality')}>Start Watching</Button></div>
                <NodeIDContainer />
=======
                <Button onClick={query}/>
>>>>>>> 547c5e13ff3ece2ba2a3d42fd95f50c6f8a07d2f
                <LogContainer />
            </Router>
           
        </Container>
    </>
    )
}

export default MainContainer;