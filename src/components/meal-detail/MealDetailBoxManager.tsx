import { useAppSelector } from "../../redux/hooks";
import { selectCategoriesContainingMeal } from "../../redux/selectors";
import React from "react";
import MealDetailBoxCategory from "./MealDetailBoxCategory";

interface Props {
  mealId: number;
}

export const MealDetailBoxManager = ({ mealId }: Props) => {
  const categoriesIds = useAppSelector(state =>
    selectCategoriesContainingMeal(state, { mealId })
  );

  return (
    <>
      {categoriesIds.map(categoryId => (
        <MealDetailBoxCategory categoryId={categoryId} mealId={mealId} />
      ))}
    </>
  );
};
