import React, { useState } from "react";

export const UsageDisplay = (props) => {
    return (
    <>
    {props.abnormalNode !== null && (
    <div id='usage'>
    <div id='cpu-header'>Average response time for all nodes in the replica set: {props.medianTime} seconds</div>
    </div> 
    )}
    </>
    )
}
