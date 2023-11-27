import React, { useState } from "react";

export const UsageDisplay = () => {
    return (
    <>
      <div id='usage'>
        <h1 id='cpu-header'>CPU Usage</h1> <h1 id='cpu-header'>Average For Replica Set</h1>
      </div> 
      <div id='usage-details'>
        <img src='https://d1v0bax3d3bxs8.cloudfront.net/server-monitoring/cpu-usage.png'/>
      </div> 
    </>
    )
}
