import React, {useState, useEffect} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

export const DropdownMenu = (props) => {
    const handleSelect = (event) =>{
        const selectedValue = event.target.value;
        props.setSelectedRS(selectedValue)
    }
    return (
        <select id='default-dropdown' onChange={handleSelect} value={props.selectedRS}>
            <option id='replica-menu' value ="">
                select a replica set
            </option>
            {/* map our array of replica sets to an array of 'option' elements to populate our dropdown*/}
            {props.replicaSets.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
        </select>
    );
};
