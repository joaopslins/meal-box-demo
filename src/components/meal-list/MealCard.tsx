import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectMealById } from "../../redux/selectors";
import styled from "styled-components";
import MealButtons from "../shared/MealButtons";
import Image from "../shared/Image";
import MealRater from "../shared/MealRater";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 140px;
  background-color: white;
  box-shadow: 0 0 5px 1px rgba(34, 34, 34, 0.4);

  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Title = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary600};
  text-align: center;
  font-weight: 500;
  flex: 1;
  text-decoration: none;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.secondary400};
    text-decoration: underline;
  }
`;

interface Props {
  id: number;
}

const MealCard = ({ id }: Props) => {
  const meal = useAppSelector(state => selectMealById(state, id));

  return (
    <Card>
      <Image size={140} url={meal.image} />
      <MealButtons mealId={id} />
      <Body>
        <Title to={`/detail/${id}`}>{meal.name}</Title>
        <MealRater mealId={id} size={20} />
      </Body>
    </Card>
  );
};

export default MealCard;
