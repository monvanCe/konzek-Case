import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import continentsReducer from './continents/continentsSlice';
import languagesReducer from './languages/languagesSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const reducer = combineReducers({
  countries: countriesReducer,
  continents: continentsReducer,
  languages: languagesReducer,
});

export const store = createStore(reducer, applyMiddleware(...[sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
