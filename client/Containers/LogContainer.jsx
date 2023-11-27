import React from "react";
import { NodeSelector } from "../Components/DropdownMenu";
import { Container } from "react-bootstrap";
import { UsageDisplay } from "../Components/UsageDisplay";
import { UsageDetails } from "../Components/UsageDetails";



export const LogContainer = ({ value, responseData }) => {
    return(
        <div id='logcontainer'>
            <Container>
                <UsageDisplay/>
                <UsageDetails/>
            </Container>
        </div>
    )
}