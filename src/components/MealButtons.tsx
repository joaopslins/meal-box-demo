import React from "react";
import styled from "styled-components";
import { useMealActions, useMealInfo } from "../redux/hooks";
import { FaPlus, FaMinus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.secondary600};
  font-weight: 700;
`;

const Button = styled.button`
  height: 24px;
  width: 24px;

  border: 0;
  background-color: ${({ theme }) => theme.colors.primary500};
  color: #222222;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary400};
  }

  &:disabled {
    background-color: silver;
    cursor: not-allowed;
  }

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  mealId: number;
}

const MealButtons = ({ mealId }: Props) => {
  const { count, canAdd, canRemove } = useMealInfo(mealId);
  const { addMeal, removeMeal } = useMealActions(mealId);

  return (
    <Container>
      <Button disabled={!canRemove} onClick={() => removeMeal()}>
        <FaMinus />
      </Button>
      <Counter>{count}</Counter>
      <Button disabled={!canAdd} onClick={() => addMeal()}>
        <FaPlus />
      </Button>
    </Container>
  );
};

export default MealButtons;
