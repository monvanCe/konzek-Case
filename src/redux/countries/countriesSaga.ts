import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCountriesAPI } from '../../service/api';
import { fetchCountriesSuccess, fetchCountriesFailure } from './countriesSlice';
import { Country } from '../types';

export function* fetchCountriesSaga() {
  try {
    const countries: Country[] = yield call(fetchCountriesAPI);
    yield put(fetchCountriesSuccess(countries));
  } catch (error: any) {
    yield put(fetchCountriesFailure(error.message));
  }
}

export function* watchFetchCountries() {
  yield takeEvery('countries/fetchCountries', fetchCountriesSaga);
}
