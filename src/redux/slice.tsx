import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    box?: {
      [categoryId: number]: number[];
    };
  };
  plan: {
    [categoryId: number]: number;
  }[];
}

const initialState: State = {
  entities: {
    categories: {},
    meals: {}
  },
  ui: {},
  plan: []
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

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {},
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
      state.plan = action.payload.data;
    });
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Define a thunk that dispatches those action creators

export default slice.reducer;
