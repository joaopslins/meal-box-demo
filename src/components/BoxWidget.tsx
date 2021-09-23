import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 16px;
  padding: 8px;

  align-self: stretch;
  flex: 0 0 320px;

  border: 2px solid darkgreen;
`;

const BoxWidget = () => {
  return (
    <Container>
      <div>Box</div>
    </Container>
  );
};

export default BoxWidget;
