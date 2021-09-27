import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryAPI, Meal, MyPlanAPI } from "../types";
import { normalize } from "normalizr";
import { categorySchema } from "../schemas";

export interface State {
  entities: {
    categories: {
      [id: number]: Category;
    };
    meals: {
      [id: number]: Meal;
    };
  };
  ui: {
    categories?: number[];
    box: {
      [categoryId: number]: number[];
    };
  };
  plan: {
    [categoryId: number]: number;
  };
}

const initialState: State = {
  entities: {
    categories: {},
    meals: {}
  },
  ui: {
    box: {}
  },
  plan: {}
};

export const fetchCategories = createAsyncThunk<CategoryAPI>(
  "categories/fetchAll",
  async thunkAPI => {
    const response = await fetch("http://localhost:3004/categories");
    return await response.json();
  }
);

export const fetchPlan = createAsyncThunk<MyPlanAPI>(
  "myPlan/fetch",
  async thunkAPI => {
    const response = await fetch("http://localhost:3004/myPlan");
    return await response.json();
  }
);

interface MealActionPayload {
  mealId: number;
  categoryId: number;
}

interface MealRatePayload {
  mealId: number;
  rating: number;
}

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    incrementMeal: (state, action: PayloadAction<MealActionPayload>) => {
      state.ui.box[action.payload.categoryId].push(action.payload.mealId);
    },
    decrementMeal: (state, action: PayloadAction<MealActionPayload>) => {
      const firstIndex = state.ui.box[action.payload.categoryId].indexOf(
        action.payload.mealId
      );

      if (firstIndex === -1) return;

      state.ui.box[action.payload.categoryId].splice(firstIndex, 1);
    },
    rateMeal: (state, action: PayloadAction<MealRatePayload>) => {
      state.entities.meals[action.payload.mealId].rating =
        action.payload.rating;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const { entities, result } = normalize(action.payload.data, [
        categorySchema
      ]);
      // @ts-ignore
      state.entities = { ...entities };
      state.ui.categories = result;
    });
    builder.addCase(fetchPlan.fulfilled, (state, action) => {
      state.plan = action.payload.data.reduce((acc, plan) => {
        acc[plan.category] = plan.quantity;
        return acc;
      }, {} as { [categoryId: number]: number });

      const box: { [categoryId: number]: [] } = {};

      action.payload.data.forEach(plan => {
        box[plan.category] = [];
      });

      state.ui.box = box;
    });
  }
});

// Action creators are generated for each case reducer function
export const { incrementMeal, decrementMeal, rateMeal } = slice.actions;
// Define a thunk that dispatches those action creators

export default slice.reducer;
