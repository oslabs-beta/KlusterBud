import React from "react";

export const UsageDetails = ({value, responseData}) => {
    return(
        //insert logic for retrieving the node details to be displayed
        <div id='pulled-usage-details'>
        'Usage Details Inserted here'
        <p src={responseData}/>
        </div>
    )
}