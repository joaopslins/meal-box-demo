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

const selectCategoryOnBox = (state: RootState, options: any) =>
  state.ui.box[options.categoryId];

// Fix memo
export const selectMealQuantityByCategory = createSelector(
  selectCategoryOnBox,
  (state, options) => options.mealId,
  (categoryBox, mealId) =>
    categoryBox?.reduce((sum, meal) => (meal === mealId ? sum + 1 : sum), 0) ??
    0
);
