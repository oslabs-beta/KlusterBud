import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";

const MainContainer = () => {
    return (
        <Container>
            <div id='title'><h1>KLUSTERBUD</h1></div>
            <Router>
                <LogContainer />
            </Router>
        </Container>
    )
}

export default MainContainer;