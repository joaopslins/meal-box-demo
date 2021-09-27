import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectMealById } from "../redux/selectors";
import styled from "styled-components";
import MealButtons from "./MealButtons";
import Image from "./Image";
import MealRater from "./MealRater";

const Card = styled.div`
  width: 140px;
  background-color: white;
  box-shadow: 0 0 5px 1px rgba(34, 34, 34, 0.4);
`;

const Body = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary600};
  font-weight: 500;
`;

const MealCard = ({ id }: { id: number }) => {
  const meal = useAppSelector(state => selectMealById(state, id));

  return (
    <Card>
      <Image size={140} url={meal.image} />
      <MealButtons mealId={id} />
      <Body>
        <Title>{meal.name}</Title>
        <MealRater mealId={id} size={20} />
      </Body>
    </Card>
  );
};

export default MealCard;
