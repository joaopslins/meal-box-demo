import React from "react";
import { useAppSelector, useCategoryBoxInfo } from "../redux/hooks";
import { selectCategoryById } from "../redux/selectors";
import { CategoryProvider } from "../redux/categoryContext";
import styled from "styled-components";
import WidgetMeal from "./WidgetMeal";
import { getThemeBorder } from "../theme";
import WidgetClearCategoryButton from "./WidgetClearCategoryButton";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary500};
  padding: 8px;
  ${getThemeBorder}

  & + & {
    margin-top: 8px;
  }
`;

const Header = styled.div`
  padding: 4px 0;
  color: white;
  font-weight: 500;
  font-size: 1.125em;

  display: flex;
  justify-content: space-between;
`;

const HeaderInfo = styled.div`
  display: flex;

  > * + * {
    margin-left: 8px;
  }
`;

interface Props {
  id: number;
}

const WidgetCategory = ({ id }: Props) => {
  const category = useAppSelector(state => selectCategoryById(state, id));
  const {
    uniqueMeals,
    currentMealQuantity,
    totalMealQuantity
  } = useCategoryBoxInfo(id);

  return (
    <CategoryProvider value={id}>
      <Container>
        <Header>
          <span>{category.name}</span>
          <HeaderInfo>
            {currentMealQuantity > 0 && (
              <WidgetClearCategoryButton categoryId={id} />
            )}
            <span>
              {currentMealQuantity} / {totalMealQuantity}
            </span>
          </HeaderInfo>
        </Header>
        {uniqueMeals.map(mealId => (
          <WidgetMeal key={mealId} id={mealId} />
        ))}
      </Container>
    </CategoryProvider>
  );
};

export default WidgetCategory;
