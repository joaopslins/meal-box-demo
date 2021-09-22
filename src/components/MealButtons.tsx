import React from "react";
import styled from "styled-components";
import { useMealActions, useMealInfo } from "../redux/hooks";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
`;

interface Props {
  mealId: number;
}

const MealButtons = ({ mealId }: Props) => {
  const { count } = useMealInfo(mealId);
  const { addMeal, removeMeal } = useMealActions(mealId);

  return (
    <Container>
      <button onClick={() => removeMeal()}>-</button>
      <Counter>{count}</Counter>
      <button onClick={() => addMeal()}>+</button>
    </Container>
  );
};

export default MealButtons;
