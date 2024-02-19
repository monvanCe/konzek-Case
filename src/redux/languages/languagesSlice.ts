import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, LanguagesState } from '../types';

const initialState: LanguagesState = {
  data: [],
  loading: false,
  error: null,
};

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    fetchLanguages(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLanguagesSuccess(state, action: PayloadAction<Language[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchLanguagesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchLanguages, fetchLanguagesSuccess, fetchLanguagesFailure } =
  languagesSlice.actions;

export default languagesSlice.reducer;
