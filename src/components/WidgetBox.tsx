import React from "react";
import styled from "styled-components";
import { useAppSelector, useBoxInfo } from "../redux/hooks";
import WidgetCategory from "./WidgetCategory";
import { selectCategoriesIds } from "../redux/selectors";
import { getThemeBorder } from "../theme";

const Container = styled.div`
  margin: 8px;

  align-self: flex-start;
  flex: 0 0 320px;

  border: 4px solid ${props => props.theme.colors.tertiary};
  ${getThemeBorder}
`;

const Header = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.colors.tertiary};
  color: white;
  font-weight: 500;
  font-size: 1.25em;

  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  height: 16px;
  background-color: ${props => props.theme.colors.tertiary};
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
      <Footer />
    </Container>
  );
};

export default WidgetBox;
