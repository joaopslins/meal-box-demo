import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getMealById } from "../redux/selectors";
import styled from "styled-components";
import MealButtons from "./MealButtons";

const Card = styled.div`
  border: 1px solid red;
  width: 120px;
`;

const CardImage = styled.div<{
  url: string;
}>`
  background-size: cover;
  width: 120px;
  height: 120px;
  background-image: url(${({ url }) => url});
`;

const MealCard = ({ id }: { id: number }) => {
  const meal = useAppSelector(state => getMealById(state, id));

  return (
    <Card>
      <CardImage url={meal.image} />
      <div>{meal.name}</div>
      <MealButtons mealId={id} />
    </Card>
  );
};

export default MealCard;
