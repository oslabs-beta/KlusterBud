import React from 'react';
import { Container } from 'react-bootstrap';
import  ReplicaSetSelector, { DropdownMenu }  from '../Components/DropdownMenu';
import { Dropdown } from 'react-bootstrap';

export const DropDownContainer = (props) => {
    return(
        <div id="dropdown-container">
            <Container>
                <DropdownMenu id='dropdown-menu' selectedRS={props.selectedRS} setSelectedRS={props.setSelectedRS} replicaSets={props.replicaSets}/>
            </Container>
        </div>
    )
}