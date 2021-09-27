import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useCategoryContext } from "./categoryContext";
import { decrementMeal, incrementMeal, rateMeal } from "./slice";
import {
  selectAvailableQtyByCategory,
  selectBoxMealsByCategory,
  selectMealBoxCurrentQuantity,
  selectMealBoxTotalQuantity,
  selectMealById,
  selectPlanCapByCategory,
  selectQuantityByCategoryByMeal
} from "./selectors";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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

  const count = useAppSelector(state =>
    selectQuantityByCategoryByMeal(state, { categoryId, mealId })
  );

  const availableQtyOnCategory = useAppSelector(state =>
    selectAvailableQtyByCategory(state, { categoryId })
  );

  const canAdd = availableQtyOnCategory > 0;
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
  const currentMealQuantity = useAppSelector(state =>
    selectBoxMealsByCategory(state, { categoryId })
  ).length;
  const totalMealQuantity = useAppSelector(state =>
    selectPlanCapByCategory(state, { categoryId })
  );

  return { currentMealQuantity, totalMealQuantity };
};
