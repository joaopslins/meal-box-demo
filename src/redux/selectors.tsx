import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectState = (state: RootState) => state;
const selectId = (_: RootState, id: number) => id;

// TODO fix memoization
export const getCategoryById = createSelector(
  selectState,
  selectId,
  (state, id: number) => state.entities.categories[id]
);

// TODO fix memoization
export const getMealById = createSelector(
  selectState,
  selectId,
  (state, id: number) => state.entities.meals[id]
);
