import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectCategoryById } from "../../redux/selectors";
import styled from "styled-components";
import { CategoryProvider } from "../../redux/categoryContext";
import MealCard from "./MealCard";
import MainCard from "../shared/MainCard";

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 20px;
`;

interface Props {
  id: number;
}

const CategorySection = ({ id }: Props) => {
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <CategoryProvider value={id}>
      <MainCard header={category.name}>
        <MealListContainer>
          {category.meals.map(mealId => (
            <MealCard key={mealId} id={mealId} />
          ))}
        </MealListContainer>
      </MainCard>
    </CategoryProvider>
  );
};

export default CategorySection;
