import React from "react";
import { NodeSelector } from "../Components/DropdownMenu";
import { Container } from "react-bootstrap";
import { UsageDisplay } from "../Components/UsageDisplay";
import { UsageDetails } from "../Components/UsageDetails";



export const LogContainer = (props) => {
    return(
        <div id='logcontainer'>
            <Container>
                <UsageDisplay medianTime={props.medianTime} abnormalNode={props.abnormalNode}/>
                {/* <UsageDetails/> */}
            </Container>
        </div>
    )
}