import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface State {
  categories: [];
}

const initialState: State = {
  categories: []
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async thunkAPI => {
    const response = await fetch("http://localhost:3004/categories");
    return await response.json();
  }
);

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Define a thunk that dispatches those action creators

export default slice.reducer;
