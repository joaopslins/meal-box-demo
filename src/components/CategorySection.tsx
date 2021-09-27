import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import styled from "styled-components";
import { CategoryProvider } from "../redux/categoryContext";
import MealCard from "./MealCard";

const Container = styled.div`
  border: 1px solid black;
  padding: 8px;

  margin: 16px;
`;

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategorySection = ({ id }: { id: number }) => {
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <CategoryProvider value={id}>
      <Container>
        <div>Name: {category.name}</div>
        <MealListContainer>
          {category.meals.map(mealId => (
            <MealCard key={mealId} id={mealId} />
          ))}
        </MealListContainer>
      </Container>
    </CategoryProvider>
  );
};

export default CategorySection;
