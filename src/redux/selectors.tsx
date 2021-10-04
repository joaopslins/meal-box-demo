import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Reselect selectors best practices
// https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/
// https://medium.com/swlh/building-efficient-reselect-selectors-759800f8ed7f
// https://github.com/reduxjs/reselect/issues/97

// https://stackoverflow.com/questions/42723922/can-you-declare-a-object-literal-type-that-allows-unknown-properties-in-typescri
type Requires<T> = T & { [key: string]: unknown };

export const selectCategoryById = (state: RootState, id: number) =>
  state.entities.categories[id];
export const selectMealById = (state: RootState, id: number) =>
  state.entities.meals[id];
export const selectCategoriesIds = (state: RootState) => state.ui.categories;

export const selectPlanCapByCategory = (
  state: RootState,
  props: Requires<{ categoryId: number }>
) => state.plan[props.categoryId];

export const selectBoxMealsByCategory = (
  state: RootState,
  props: Requires<{ categoryId: number }>
) => state.ui.box[props.categoryId] ?? [];

export const selectMealBoxTotalQuantity = createSelector(
  (state: RootState) => state.plan,
  plans => Object.values(plans).reduce((acc, qty) => acc + qty, 0)
);

export const selectMealBoxCurrentQuantity = createSelector(
  (state: RootState) => state.ui.box,
  box => Object.values(box).reduce((acc, meals) => acc + meals.length, 0)
);

export const selectAvailableQtyByCategory = createSelector(
  selectPlanCapByCategory,
  selectBoxMealsByCategory,
  (planCap, boxList) => planCap - boxList.length
);

export const factorySelectUniqueMealsByCategory = () =>
  createSelector(selectBoxMealsByCategory, meals => [...new Set(meals)]);

export const factorySelectQuantityByCategoryByMeal = () =>
  createSelector(
    selectBoxMealsByCategory,
    (_, props: Requires<{ mealId: number }>) => props.mealId,
    (categoryBox, mealId) =>
      categoryBox.reduce((sum, meal) => (meal === mealId ? sum + 1 : sum), 0) ??
      0
  );
