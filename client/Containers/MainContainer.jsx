import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";

const MainContainer = () => {
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
    return (
    <>
        <Container>
            <div><h1 id='title'>KLUSTERBUD</h1></div>
            <DropDownContainer />
        </Container>
        <Container>
            <Router>
                <Button onClick={query}/>
                <LogContainer />
            </Router>
        </Container>
    </>
    )
}

export default MainContainer;