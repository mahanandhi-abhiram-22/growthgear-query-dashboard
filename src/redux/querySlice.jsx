// querySlice.jsx (unchanged, just adding gradient comment)
import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: { history: [], result: null, loading: false, error: null },
  reducers: {
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    querySuccess: (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.history.unshift(action.payload.query);
    },
    queryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { submitQuery, querySuccess, queryFailure } = querySlice.actions;
export default querySlice.reducer;
