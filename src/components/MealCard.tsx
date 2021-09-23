import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectMealById } from "../redux/selectors";
import styled from "styled-components";
import MealButtons from "./MealButtons";
import Image from "./Image";

const Card = styled.div`
  border: 1px solid red;
  width: 120px;
`;

const MealCard = ({ id }: { id: number }) => {
  const meal = useAppSelector(state => selectMealById(state, id));

  return (
    <Card>
      <Image size={120} url={meal.image} />
      <div>{meal.name}</div>
      <MealButtons mealId={id} />
    </Card>
  );
};

export default MealCard;
