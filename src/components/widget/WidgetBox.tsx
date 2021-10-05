import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import WidgetCategory from "./WidgetCategory";
import { selectCategoriesIds } from "../../redux/selectors";
import { getThemeBorder } from "../../theme";
import Sticky from "react-sticky-el";
import WidgetSubmit from "./WidgetSubmit";
import WidgetRecomendationButton from "./WidgetRecomendationButton";

const StickyContainer = styled.div`
  flex: 0 0 360px;
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

const ScrollableArea = styled.div`
  max-height: 80vh;
  overflow: auto;
`;

const WidgetBox = () => {
  const categoriesIds = useAppSelector(selectCategoriesIds);

  return (
    <StickyContainer>
      <Sticky topOffset={-16} stickyStyle={{ marginTop: "16px" }}>
        <BoxContainer>
          <Header>
            <span>Your Box</span>
          </Header>
          <ScrollableArea>
            {categoriesIds?.map(id => (
              <WidgetCategory key={id} id={id} />
            ))}
          </ScrollableArea>
          <WidgetSubmit />
        </BoxContainer>
        <WidgetRecomendationButton />
      </Sticky>
    </StickyContainer>
  );
};

export default WidgetBox;
