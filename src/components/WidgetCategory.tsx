import React from "react";
import { useAppSelector } from "../redux/hooks";
import {
  selectCategoryById,
  selectUniqueMealsByCategory
} from "../redux/selectors";
import { CategoryProvider } from "../redux/categoryContext";
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
  const meals = useAppSelector(state =>
    selectUniqueMealsByCategory(state, { categoryId: id })
  );

  return (
    <CategoryProvider value={id}>
      <Container>
        <div>{category.name}</div>
        {meals.map(mealId => (
          <WidgetMeal key={mealId} id={mealId} />
        ))}
      </Container>
    </CategoryProvider>
  );
};

export default WidgetCategory;