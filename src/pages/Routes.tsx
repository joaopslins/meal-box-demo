import React, { useEffect } from "react";
import MealListPage from "./MealListPage";
import { Route } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { fetchCategories, fetchPlan } from "../redux/slice";
import BoxWidget from "../components/BoxWidget";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const RouteContainer = styled.div`
  flex: 1 1 auto;
`;

const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPlan());
  }, []);

  return (
    <Container>
      <RouteContainer>
        <Route path="/" exact>
          <MealListPage />
        </Route>
      </RouteContainer>

      <BoxWidget />
    </Container>
  );
};

export default Routes;
