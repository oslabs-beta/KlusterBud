import React from "react";
import { Container } from "react-bootstrap";
import { NodeID } from "../Components/NodeID";

export const NodeIDContainer = (props) => {
  return(
  <>
        <Container id="nodeid">
            <NodeID abnormalNode={props.abnormalNode}/>
        </Container>
    </>
  )
}
