import React from 'react';
import { Container } from 'react-bootstrap';
import  ReplicaSetSelector, { DropdownMenu }  from '../Components/DropdownMenu';
import { Dropdown } from 'react-bootstrap';

export const DropDownContainer = (props) => {
    //console.log(props) --> {key1: 'value', key2: 'value', key3: 'value'}
    return(
        <div id="dropdown-container">
            <Container>
                <DropdownMenu key1={props.key1}/>
            </Container>
        </div>
    )
}