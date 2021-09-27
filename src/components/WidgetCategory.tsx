import React from "react";
import { useAppSelector, useCategoryBoxInfo } from "../redux/hooks";
import {
  selectCategoryById,
  selectUniqueMealsByCategory
} from "../redux/selectors";
import { CategoryProvider } from "../redux/categoryContext";
import styled from "styled-components";
import WidgetMeal from "./WidgetMeal";

const Container = styled.div``;

const Header = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.colors.tertiary2};
  color: white;
  font-weight: 500;
  font-size: 1.125em;

  display: flex;
  justify-content: space-between;
`;

interface Props {
  id: number;
}

const WidgetCategory = ({ id }: Props) => {
  const category = useAppSelector(state => selectCategoryById(state, id));
  const meals = useAppSelector(state =>
    selectUniqueMealsByCategory(state, { categoryId: id })
  );
  const { currentMealQuantity, totalMealQuantity } = useCategoryBoxInfo(id);

  return (
    <CategoryProvider value={id}>
      <Container>
        <Header>
          <span>{category.name}</span>
          <span>
            {currentMealQuantity} / {totalMealQuantity}
          </span>
        </Header>
        {meals.map(mealId => (
          <WidgetMeal key={mealId} id={mealId} />
        ))}
      </Container>
    </CategoryProvider>
  );
};

export default WidgetCategory;
