import React from "react";
import styled from "styled-components";
import MealCard from "./MealCard";

const Container = styled.div`
  border: 1px solid blue;
`;

const MealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MealsList = ({ meals }: { meals: number[] }) => {
  return (
    <Container>
      <div>Meals:</div>
      <MealListContainer>
        {meals.map(mealId => (
          <MealCard key={mealId} id={mealId} />
        ))}
      </MealListContainer>
    </Container>
  );
};

export default MealsList;
