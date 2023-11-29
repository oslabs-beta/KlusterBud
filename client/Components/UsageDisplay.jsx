import React, { useState } from "react";

export const UsageDisplay = (props) => {
    return (
    <>
    <>
    {props.abnormalNode !== null && (
    <div id='usage'>
    <div id='cpu-header'>Average response time for all nodes in the replica set: {props.medianTime} seconds</div>
    </div> 
    )}
    </>
      {/* <div id='usage'>
        <h1 id='cpu-header'>Average Response Time For All Replica Sets: {props.medianTime} seconds</h1>
      </div>  */}
      {/* <div id='usage-details'>
        <img src='https://d1v0bax3d3bxs8.cloudfront.net/server-monitoring/cpu-usage.png'/>
      </div>  */}
    </>
    )
}
