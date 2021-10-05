import React from "react";
import styled from "styled-components";
import { useMealActions, useMealBoxInfo } from "../../redux/hooks";
import { FaPlus, FaMinus } from "react-icons/fa";
import BaseButton from "./BaseButton";

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

const Button = styled(BaseButton)`
  height: 24px;
  width: 24px;

  color: #222222;

  justify-content: center;
`;

interface Props {
  mealId: number;
}

const MealButtons = ({ mealId }: Props) => {
  const { count, canAdd, canRemove } = useMealBoxInfo(mealId);
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
