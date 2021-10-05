import React from "react";
import MealButtons from "../shared/MealButtons";
import { CategoryProvider } from "../../redux/categoryContext";
import { useAppSelector } from "../../redux/hooks";
import { selectCategoryById } from "../../redux/selectors";
import styled from "styled-components";

interface Props {
  categoryId: number;
  mealId: number;
}

const MealCategoryContainer = styled.div`
  width: 100%;
  margin: 8px 0;
`;

const Title = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary600};
  margin-bottom: 4px;
  font-size: 1.125em;
`;

const MealDetailBoxCategory = ({ categoryId, mealId }: Props) => {
  const category = useAppSelector(state =>
    selectCategoryById(state, categoryId)
  );

  return (
    <CategoryProvider key={categoryId} value={categoryId}>
      <MealCategoryContainer>
        <Title>{category.name}</Title>
        <MealButtons mealId={mealId} />
      </MealCategoryContainer>
    </CategoryProvider>
  );
};

export default MealDetailBoxCategory;
