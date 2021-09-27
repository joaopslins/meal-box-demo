import React from "react";
import styled from "styled-components";
import { useAppSelector, useBoxInfo } from "../redux/hooks";
import WidgetCategory from "./WidgetCategory";
import { selectCategoriesIds } from "../redux/selectors";
import { getThemeBorder } from "../theme";

const Header = styled.div`
  padding: 0 4px;
  color: white;
  font-weight: 500;
  font-size: 1.25em;

  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  padding: 8px;

  align-self: flex-start;
  flex: 0 0 320px;

  background-color: ${({ theme }) => theme.colors.secondary600};
  ${getThemeBorder}

  ${Header} {
    margin-bottom: 8px;
  }
`;

const WidgetBox = () => {
  const categoriesIds = useAppSelector(selectCategoriesIds);
  const { selectedQuantity, totalQuantity } = useBoxInfo();

  return (
    <Container>
      <Header>
        <span>Your Box</span>
        <span>
          {selectedQuantity} / {totalQuantity}
        </span>
      </Header>
      {categoriesIds?.map(id => (
        <WidgetCategory key={id} id={id} />
      ))}
    </Container>
  );
};

export default WidgetBox;
