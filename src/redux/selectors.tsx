import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

// https://medium.com/swlh/building-efficient-reselect-selectors-759800f8ed7f

export const selectCategoryById = (state: RootState, id: number) =>
  state.entities.categories[id];
export const selectMealById = (state: RootState, id: number) =>
  state.entities.meals[id];

const selectCategoryOnBox = (state: RootState, categoryId: number) =>
  state.ui.box[categoryId];

// Fix memo
export const selectMealQuantityByCategory = createSelector(
  selectCategoryOnBox,
  (state, _, mealId: number) => mealId,
  (categoryBox, mealId) =>
    categoryBox?.reduce((sum, meal) => (meal === mealId ? sum + 1 : sum), 0) ??
    0
);
