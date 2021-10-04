import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectMealById } from "../redux/selectors";
import MealButtons from "./MealButtons";
import styled from "styled-components";
import Image from "./Image";
import MealRater from "./MealRater";
import { getThemeBorder } from "../theme";

const Container = styled.div`
  box-shadow: 0 0 5px 1px rgba(34, 34, 34, 0.4);
  display: flex;
  background-color: white;

  > * + * {
    margin-left: 8px;
  }

  padding: 8px;
  margin-top: 8px;
  ${getThemeBorder};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1 0 auto;
`;

const ButtonsContainer = styled.div`
  align-self: stretch;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 500;
  color: #222222;
`;

interface Props {
  id: number;
}

const WidgetMeal = ({ id }: Props) => {
  const meal = useAppSelector(state => selectMealById(state, id));

  return (
    <Container>
      <Image size={64} url={meal.image} />
      <Details>
        <HeaderContainer>
          <Title>{meal.name}</Title>
          <MealRater mealId={id} />
        </HeaderContainer>
        <ButtonsContainer>
          <MealButtons mealId={id} />
        </ButtonsContainer>
      </Details>
    </Container>
  );
};

export default WidgetMeal;
