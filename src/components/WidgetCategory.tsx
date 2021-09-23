import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import { CategoryContext } from "../redux/categoryContext";
import styled from "styled-components";
import WidgetMeal from "./WidgetMeal";

interface Props {
  id: number;
}

const Container = styled.div`
  border: 1px solid black;
`;

const WidgetCategory = ({ id }: Props) => {
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <CategoryContext.Provider value={id}>
      <Container>
        <div>{category.name}</div>
        {category.meals.map(mealId => (
          <WidgetMeal key={mealId} id={mealId} />
        ))}
      </Container>
    </CategoryContext.Provider>
  );
};

export default WidgetCategory;
