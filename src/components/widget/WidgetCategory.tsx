import React from "react";
import { useCategoryUniqueMeals } from "../../redux/hooks";
import { CategoryProvider } from "../../redux/categoryContext";
import styled from "styled-components";
import WidgetMeal from "./WidgetMeal";
import { getThemeBorder } from "../../theme";
import { WidgetCategoryHeader } from "./WidgetCategoryHeader";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary500};
  padding: 8px;
  ${getThemeBorder}

  & + & {
    margin-top: 8px;
  }
`;

interface Props {
  id: number;
}

const WidgetCategory = ({ id }: Props) => {
  const uniqueMeals = useCategoryUniqueMeals(id);

  return (
    <CategoryProvider value={id}>
      <Container>
        <WidgetCategoryHeader id={id} />
        {uniqueMeals.map(mealId => (
          <WidgetMeal key={mealId} id={mealId} />
        ))}
      </Container>
    </CategoryProvider>
  );
};

export default WidgetCategory;
