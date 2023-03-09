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
        pizzasData: [],
        drinksData: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
          const pizzas = action.payload.data.filter((el) => el.type != 'drink')
          const drinks = action.payload.data.filter((el) => el.type === 'drink')
          state.pizzasData = pizzas
          state.drinksData = drinks
        })
    }
  });
  
export const { incremented } = mainSlice.actions;
export const mainSliceReducer = mainSlice.reducer; 