import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Reselect selectors best practices
// https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/
// https://medium.com/swlh/building-efficient-reselect-selectors-759800f8ed7f
// https://github.com/reduxjs/reselect/issues/97

export const selectCategoryById = (state: RootState, id: number) =>
  state.entities.categories[id];
export const selectMealById = (state: RootState, id: number) =>
  state.entities.meals[id];

const selectPlanCapByCategory = (state: RootState, props: any) =>
  state.plan[props.categoryId];

const selectBoxMealsByCategory = (state: RootState, props: any) =>
  state.ui.box[props.categoryId] ?? [];

export const selectUniqueMealsByCategory = createSelector(
  selectBoxMealsByCategory,
  meals => [...new Set(meals)]
);

export const selectAvailableQtyByCategory = createSelector(
  selectPlanCapByCategory,
  selectBoxMealsByCategory,
  (planCap, boxList) => planCap - boxList.length
);

// Fix memo
export const selectMealQuantityByCategory = createSelector(
  selectBoxMealsByCategory,
  (_, props) => props.mealId,
  (categoryBox, mealId) =>
    categoryBox?.reduce((sum, meal) => (meal === mealId ? sum + 1 : sum), 0) ??
    0
);
