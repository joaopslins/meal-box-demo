import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getCategoryById } from "../redux/selectors";
import styled from "styled-components";
import MealsList from "./MealsList";

const Container = styled.div`
  border: 1px solid black;
  padding: 8px;

  margin: 16px;
`;

const CategorySection = ({ id }: { id: number }) => {
  const category = useAppSelector(state => getCategoryById(state, id));

  return (
    <Container>
      <div>Name: {category.name}</div>
      <MealsList meals={category.meals} />
    </Container>
  );
};

export default CategorySection;
