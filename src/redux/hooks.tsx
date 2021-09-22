import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useCategoryContext } from "./categoryContext";
import { decrementMeal, incrementMeal } from "./slice";
import { selectMealQuantityByCategory } from "./selectors";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMealActions = (mealId: number) => {
  const categoryId = useCategoryContext();
  const dispatch = useAppDispatch();

  const addMeal = () => {
    if (!categoryId) return;

    dispatch(
      incrementMeal({
        mealId,
        categoryId
      })
    );
  };

  const removeMeal = () => {
    if (!categoryId) return;

    dispatch(
      decrementMeal({
        mealId,
        categoryId
      })
    );
  };

  return { addMeal, removeMeal };
};

export const useMealInfo = (mealId: number) => {
  const categoryId = useCategoryContext();

  const count = useAppSelector(state =>
    selectMealQuantityByCategory(state, categoryId ?? 0, mealId)
  );

  return { count };
};
