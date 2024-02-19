import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesState, Country } from '../types';

const initialState: CountriesState = {
  data: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountries(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCountriesSuccess(state, action: PayloadAction<Country[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCountriesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCountries, fetchCountriesSuccess, fetchCountriesFailure } =
  countriesSlice.actions;

export default countriesSlice.reducer;
