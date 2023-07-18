import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
	initialState: filterInitialState,
	
  reducers: {
    setContactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
