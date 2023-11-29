import React, {useState, useEffect} from "react";

export const NodeID = (props) => {
    return(
    //insert logic to pull node ID
    <>
    {props.abnormalNode !== null && (
    <div>Abnormal Node: {props.abnormalNode}</div>
    )}
    </>
    )
}