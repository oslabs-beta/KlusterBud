import React from "react";
import { NodeSelector } from "../Components/DropdownMenu";
import { Container } from "react-bootstrap";
import { UsageDisplay } from "../Components/UsageDisplay";


export const LogContainer = () => {
    return(
        <div id='logcontainer'>
            <Container>
                <UsageDisplay/>
            </Container>
        </div>
    )
}