import React, { useEffect } from "react";
import MealListPage from "./MealListPage";
import { Route } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { fetchCategories, fetchPlan } from "../redux/slice";
import WidgetBox from "../components/widget/WidgetBox";
import styled from "styled-components";
import MealDetailPage from "./MealDetailPage";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const RouteContainer = styled.div`
  flex: 1 1 auto;
`;

const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPlan());
  }, [dispatch]);

  return (
    <Container>
      <RouteContainer>
        <Route path="/detail/:id" exact>
          <MealDetailPage />
        </Route>
        <Route path="/" exact>
          <MealListPage />
        </Route>
      </RouteContainer>

      <WidgetBox />
    </Container>
  );
};

export default Routes;
