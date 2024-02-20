import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchLanguagesAPI } from '../../service/api';
import { fetchLanguagesSuccess, fetchLanguagesFailure } from './languagesSlice';
import { Language } from '../types';

export function* fetchLanguagesSaga() {
  try {
    const languages: Language[] = yield call(fetchLanguagesAPI);
    yield put(fetchLanguagesSuccess(languages));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchLanguagesFailure(error.message));
    }
  }
}

export function* watchFetchLanguages() {
  yield takeEvery('languages/fetchLanguages', fetchLanguagesSaga);
}
