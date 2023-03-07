import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slices/AuthSlice";
import { mainSliceReducer } from "./slices/mainSlice";

const reducers = combineReducers({
  main: mainSliceReducer,
  auth: authSliceReducer,
});

export const redux = configureStore({
  reducer: reducers,
});

redux.subscribe(() => {
  const state = redux.getState();
  localStorage.setItem('auth', state.auth.isAuth)
})