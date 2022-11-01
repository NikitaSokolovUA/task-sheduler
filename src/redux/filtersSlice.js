import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constatns";


const filtersInitialState = {
  status: statusFilters.all,
};


const filtersSlice = createSlice({
    name: 'filter',
    initialState: filtersInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload
        }
    }
})

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;