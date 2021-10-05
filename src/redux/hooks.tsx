import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useCategoryContext } from "./categoryContext";
import { decrementMeal, incrementMeal, rateMeal } from "./slice";
import {
  factorySelectQuantityByCategoryByMeal,
  factorySelectUniqueMealsByCategory,
  selectAvailableQtyByCategory,
  selectBoxMealsByCategory,
  selectMealBoxCurrentQuantity,
  selectMealBoxTotalQuantity,
  selectMealById,
  selectPlanCapByCategory
} from "./selectors";
import { useMemo } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useMemoSelector: <T>(factory: () => T) => T = factory =>
  useMemo(() => factory(), [factory]);

export const useMealActions = (mealId: number) => {
  const categoryId = useCategoryContext();
  const dispatch = useAppDispatch();

  const addMeal = () => {
    dispatch(
      incrementMeal({
        mealId,
        categoryId
      })
    );
  };

  const removeMeal = () => {
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

  // Memoized since this is used by multiple instances
  const memoSelectQuantityByCategoryByMeal = useMemoSelector(
    factorySelectQuantityByCategoryByMeal
  );

  const count = useAppSelector(state =>
    memoSelectQuantityByCategoryByMeal(state, { categoryId, mealId })
  );

  const canAdd = useAppSelector(
    state => selectAvailableQtyByCategory(state, { categoryId }) > 0
  );

  const canRemove = count > 0;

  return { count, canRemove, canAdd };
};

export const useMealRater = (mealId: number) => {
  const dispatch = useAppDispatch();
  const rating =
    useAppSelector(state => selectMealById(state, mealId)).rating ?? 0;

  const setRating = (rating: number) => {
    dispatch(rateMeal({ mealId, rating }));
  };

  return { rating, setRating };
};

export const useBoxInfo = () => {
  const selectedQuantity = useAppSelector(selectMealBoxCurrentQuantity);
  const totalQuantity = useAppSelector(selectMealBoxTotalQuantity);

  return { selectedQuantity, totalQuantity };
};

export const useCategoryBoxInfo = (categoryId: number) => {
  // Memoized since this is used by multiple instances
  const memoSelectUniqueMealsByCategory = useMemoSelector(
    factorySelectUniqueMealsByCategory
  );

  const currentMealQuantity = useAppSelector(state =>
    selectBoxMealsByCategory(state, { categoryId })
  ).length;
  const totalMealQuantity = useAppSelector(state =>
    selectPlanCapByCategory(state, { categoryId })
  );

  const uniqueMeals = useAppSelector(state =>
    memoSelectUniqueMealsByCategory(state, { categoryId })
  );

  return { currentMealQuantity, totalMealQuantity, uniqueMeals };
};
