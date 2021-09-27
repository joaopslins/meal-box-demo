import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import WidgetCategory from "./WidgetCategory";
import { selectCategoriesIds } from "../redux/selectors";

const Container = styled.div`
  margin: 16px;
  padding: 8px;

  align-self: stretch;
  flex: 0 0 320px;

  border: 2px solid darkgreen;
`;

const WidgetBox = () => {
  const categoriesIds = useAppSelector(selectCategoriesIds);

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
