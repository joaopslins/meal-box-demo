import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import styled from "styled-components";
import MealsList from "./MealsList";
import { CategoryContext } from "../redux/categoryContext";

const Container = styled.div`
  border: 1px solid black;
  padding: 8px;

  margin: 16px;
`;

const CategorySection = ({ id }: { id: number }) => {
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <CategoryContext.Provider value={id}>
      <Container>
        <div>Name: {category.name}</div>
        <MealsList meals={category.meals} />
      </Container>
    </CategoryContext.Provider>
  );
};

export default CategorySection;
