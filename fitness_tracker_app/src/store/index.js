import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./exerciseSlice";

const store = configureStore({
  reducer: {
    exercises: exerciseReducer,
  },
});

export default store;
