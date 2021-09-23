import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import WidgetCategory from "./WidgetCategory";

const Container = styled.div`
  margin: 16px;
  padding: 8px;

  align-self: stretch;
  flex: 0 0 320px;

  border: 2px solid darkgreen;
`;

const WidgetBox = () => {
  const categoriesIds = useAppSelector(state => state.ui.categories);

  return (
    <Container>
      <div>Box</div>
      {categoriesIds?.map(id => (
        <WidgetCategory key={id} id={id} />
      ))}
    </Container>
  );
};

export default WidgetBox;
