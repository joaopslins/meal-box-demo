import React from "react";
import styled from "styled-components";
import { useAppSelector, useBoxInfo } from "../redux/hooks";
import WidgetCategory from "./WidgetCategory";
import { selectCategoriesIds } from "../redux/selectors";
import { getThemeBorder } from "../theme";
import Sticky from "react-sticky-el";

const StickyContainer = styled.div`
  flex: 0 0 320px;
`;

const Header = styled.div`
  padding: 0 4px;
  color: white;
  font-weight: 500;
  font-size: 1.25em;

  display: flex;
  justify-content: space-between;
`;

const BoxContainer = styled.div`
  padding: 8px;

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
    <StickyContainer>
      <Sticky topOffset={-16} stickyStyle={{ marginTop: "16px" }}>
        <BoxContainer>
          <Header>
            <span>Your Box</span>
            <span>
              {selectedQuantity} / {totalQuantity}
            </span>
          </Header>
          {categoriesIds?.map(id => (
            <WidgetCategory key={id} id={id} />
          ))}
        </BoxContainer>
      </Sticky>
    </StickyContainer>
  );
};

export default WidgetBox;
