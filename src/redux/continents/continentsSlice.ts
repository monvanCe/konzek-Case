import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Continent, ContinentsState } from '../types';

const initialState: ContinentsState = {
  data: [],
  loading: false,
  error: null,
};

const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {
    fetchContinents(state) {
      state.loading = true;
      state.error = null;
    },
    fetchContinentsSuccess(state, action: PayloadAction<Continent[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchContinentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchContinents,
  fetchContinentsSuccess,
  fetchContinentsFailure,
} = continentsSlice.actions;

export default continentsSlice.reducer;
