import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
      value: 999999999,
      name: "Aman"
    },
    reducers: {
      incremented: (state) => {
        state.value += 1;
      },
    },
  });
  
export const { incremented } = mainSlice.actions;
export const mainSliceReducer = mainSlice.reducer; 