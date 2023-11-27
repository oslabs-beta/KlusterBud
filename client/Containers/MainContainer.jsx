import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ReplicaSetSelector } from "../Components/DropdownMenu";
import { LogContainer } from "./LogContainer";
import { DropDownContainer } from "./DropDownContainer";

const MainContainer = () => {
    return (
    <>
        <Container>
            <div><h1 id='title'>KLUSTERBUD</h1></div>
            <DropDownContainer />
        </Container>
        <Container>
            <Router>
                <Button />
                <LogContainer />
            </Router>
        </Container>
    </>
    )
}

export default MainContainer;