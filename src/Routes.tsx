import React, { useEffect } from "react";
import MealListPage from "./pages/MealListPage";
import { Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { fetchCategories } from "./redux/slice";

const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Route path="/">
      <MealListPage />
    </Route>
  );
};

export default Routes;
