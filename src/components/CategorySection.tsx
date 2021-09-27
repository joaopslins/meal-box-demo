import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import styled from "styled-components";
import { CategoryProvider } from "../redux/categoryContext";
import MealCard from "./MealCard";
import { getThemeBorder } from "../theme";

const Container = styled.div`
  border: 4px solid ${props => props.theme.colors.primary};
  ${getThemeBorder}

  margin: 8px;
`;

const Header = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 500;
  font-size: 1.25em;
`;

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Footer = styled.div`
  //height: 2px;
  background-color: ${props => props.theme.colors.primary};
`;

const CategorySection = ({ id }: { id: number }) => {
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
        <Footer />
      </Container>
    </CategoryProvider>
  );
};

export default CategorySection;
