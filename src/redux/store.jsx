
// store.jsx (unchanged)
import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./querySlice.jsx";

export const store = configureStore({
  reducer: { query: queryReducer }
});

