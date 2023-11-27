import React from 'react';
import { Container } from 'react-bootstrap';
import  ReplicaSetSelector, { DropdownMenu }  from '../Components/DropdownMenu';
import { Dropdown } from 'react-bootstrap';

export const DropDownContainer = () => {
    return(
        <div id="dropdown-container">
            <Container>
                <DropdownMenu />
            </Container>
        </div>
    )
}