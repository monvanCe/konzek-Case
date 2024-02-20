import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContinents } from './redux/continents/continentsSlice';
import { fetchCountries } from './redux/countries/countriesSlice';
import { fetchLanguages } from './redux/languages/languagesSlice';
import { ButtonGroup } from './components/ButtonGroup';
import { CombineStatesHoc } from './HOCs/CombineStatesHoc';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinents());
  }, []);

  return (
    <div className="h-screen v-screen select-none max-w-4xl m-auto">
      <div className="pb-16 p-2">
        <CombineStatesHoc />
      </div>
      <div className="fixed h-16 w-full bottom-0 max-w-4xl">
        <ButtonGroup
          onClick={() => dispatch(fetchCountries())}
          onClick2={() => dispatch(fetchLanguages())}
        />
      </div>
    </div>
  );
};

export default App;
