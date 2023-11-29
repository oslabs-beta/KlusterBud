import React, {useState, useEffect} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

export const DropdownMenu = (props) => {
    const handleSelect = (event) =>{
        const selectedValue = event.target.value;
        props.setSelectedRS(selectedValue)
    }
    return (
        <select onChange={handleSelect} value={props.selectedRS}>
            <option value ="">
                select a replica set
            </option>
            {props.replicaSets.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
        </select>
    );
};
