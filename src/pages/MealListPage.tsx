import React from "react";
import { useAppSelector } from "../redux/hooks";
import CategorySection from "../components/meal-list/CategorySection";
import { selectCategoriesIds } from "../redux/selectors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const MealListPage = () => {
  const categoriesIds = useAppSelector(selectCategoriesIds);

  return (
    <Container>
      {categoriesIds?.map(id => (
        <CategorySection key={id} id={id} />
      ))}
    </Container>
  );
};

export default MealListPage;
