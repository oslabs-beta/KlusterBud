import React from "react";
import { Container } from "react-bootstrap";
import { NodeID } from "../Components/NodeID";

export const NodeIDContainer = ({value , responseData }) => {
  return(
  <>
        <Container id="nodeid">
            <NodeID />
        </Container>
    </>
  )
}
