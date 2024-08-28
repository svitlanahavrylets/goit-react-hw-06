import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
