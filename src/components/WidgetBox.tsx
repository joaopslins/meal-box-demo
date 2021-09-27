import React from "react";
import styled from "styled-components";
import { useAppSelector, useBoxInfo } from "../redux/hooks";
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
  const { selectedQuantity, totalQuantity } = useBoxInfo();

  return (
    <Container>
      <div>
        Box {selectedQuantity}/{totalQuantity}
      </div>
      {categoriesIds?.map(id => (
        <WidgetCategory key={id} id={id} />
      ))}
    </Container>
  );
};

export default WidgetBox;
