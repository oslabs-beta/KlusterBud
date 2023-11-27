import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const ReplicaSetSelector = () => {
    return (
        <DropdownButton id='replicaset-select-button' title='Select Replica Set'>
            <Dropdown.Item href='#/node1'>First Node</Dropdown.Item>
            <Dropdown.Item href='#/node2'>Second Node</Dropdown.Item>
            <Dropdown.Item href='#/node3'>Third Node</Dropdown.Item>
            <Dropdown.Item href='#/node4'>Fourth Node</Dropdown.Item>
            <Dropdown.Item href='#/node5'>Fifth Node</Dropdown.Item>
        </DropdownButton>
    )
}