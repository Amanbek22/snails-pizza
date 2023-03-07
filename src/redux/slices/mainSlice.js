import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../api/Api";


const getPizzas = async () => {
    const res = await Api.getPizzas()
    return res
  }

export const fetchPizzas = createAsyncThunk('main/fetchPizzas', getPizzas)

const mainSlice = createSlice({
    name: "main",
    initialState: {
        isLoading: true,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
    }
  });
  
export const { incremented } = mainSlice.actions;
export const mainSliceReducer = mainSlice.reducer; 