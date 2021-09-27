import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectMealById } from "../redux/selectors";
import MealButtons from "./MealButtons";
import styled from "styled-components";
import Image from "./Image";
import MealRater from "./MealRater";

interface Props {
  id: number;
}

const Container = styled.div`
  display: flex;

  border-top: 1px solid gray;
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

const WidgetMeal = ({ id }: Props) => {
  const meal = useAppSelector(state => selectMealById(state, id));

  return (
    <Container>
      <Image size={64} url={meal.image} />
      <Details>
        <HeaderContainer>
          <div>{meal.name}</div>
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
