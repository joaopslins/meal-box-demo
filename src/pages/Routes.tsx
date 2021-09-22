import React, { useEffect } from "react";
import MealListPage from "./MealListPage";
import { Route } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { fetchCategories, fetchPlan } from "../redux/slice";

const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPlan());
  }, []);

  return (
    <Route path="/" exact>
      <MealListPage />
    </Route>
  );
};

export default Routes;
