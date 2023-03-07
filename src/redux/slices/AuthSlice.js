import { createSlice } from "@reduxjs/toolkit";

const a = JSON.parse(localStorage.getItem('auth'))
const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuth: a,
    },
    reducers: {
        login: (state) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        }
    },
  });
  
export const { login, logout } = authSlice.actions;
export const authSliceReducer = authSlice.reducer; 