import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchContinentsAPI } from '../../service/api';
import {
  fetchContinentsSuccess,
  fetchContinentsFailure,
} from './continentsSlice';
import { Continent } from '../types';

export function* fetchContinentsSaga() {
  try {
    const continents: Continent[] = yield call(fetchContinentsAPI);
    yield put(fetchContinentsSuccess(continents));
  } catch (error: any) {
    if (error) {
      yield put(fetchContinentsFailure(error.message));
    }
  }
}

export function* watchFetchContinents() {
  yield takeEvery('continents/fetchContinents', fetchContinentsSaga);
}
