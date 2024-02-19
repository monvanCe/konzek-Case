import { all } from 'redux-saga/effects';
import { watchFetchContinents } from './continents/continentsSaga';
import { watchFetchCountries } from './countries/countriesSaga';
import { watchFetchLanguages } from './languages/languagesSaga';

export default function* rootSaga() {
  yield all([
    watchFetchContinents(),
    watchFetchCountries(),
    watchFetchLanguages(),
  ]);
}
