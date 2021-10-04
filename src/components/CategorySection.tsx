import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import styled from "styled-components";
import { CategoryProvider } from "../redux/categoryContext";
import MealCard from "./MealCard";
import { getThemeBorder } from "../theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary600};
  padding: 0 8px 8px;

  ${getThemeBorder}
`;

const Header = styled.div`
  padding: 8px;
  color: white;
  font-weight: 500;
  font-size: 1.5em;
`;

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.primary100};
  ${getThemeBorder}
`;

interface Props {
  id: number;
}

const CategorySection = ({ id }: Props) => {
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <CategoryProvider value={id}>
      <Container>
        <Header>{category.name}</Header>
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
