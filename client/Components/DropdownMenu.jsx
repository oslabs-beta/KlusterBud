import React, {useState, useEffect} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

export const DropdownMenu = () => {
    //insert http request result array here
    //substitute out testArr.map on line 44
    const testArr = ['25', '6', '9', '94']
    //using state to store replica set selection and to create a http request for each
    //CHANGE HTTP location from pokeapi to prometheus API
    //change line 20 of response.data.name to appropriate end point 
    const [value, setValue] =useState('')
    const [responseData, setResponseData] =useState(null)
    
    const handleSelect = async (eventKey) => {
        if (eventKey === 'Select Replica Set'){
            setValue('');
        }
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${testArr[eventKey]}`)
            setResponseData(response.data.name);
            setValue(value[eventKey])
        }
        catch (err){
            console.log('Error in HTTP request', err);
            return 'Error in Replica Set selection'
        }
    };

    // use fetched data for anything else
    useEffect(() => {
        console.log('Response Data', responseData)
    }, [responseData])
    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="replicaset-select">
                {value || 'Select A Replica Set '}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey='Select Replica Set' disabled>
                    Select a Replica Set Below
                </Dropdown.Item>
                {testArr.map((value, index) => (
                    <Dropdown.Item key={index} eventKey={index}>
                        {value}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
{/* <DropdownButton id='replicaset-select-button' title='Select Replica Set'>
            { testArr.forEach() }
            <Dropdown.Item href='#/node1'>First Node</Dropdown.Item>
            <Dropdown.Item href='#/node2'>Second Node</Dropdown.Item>
            <Dropdown.Item href='#/node3'>Third Node</Dropdown.Item>
            <Dropdown.Item href='#/node4'>Fourth Node</Dropdown.Item>
            <Dropdown.Item href='#/node5'>Fifth Node</Dropdown.Item>
        </DropdownButton> */}