import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContinents } from './redux/continents/continentsSlice';
import { CombineStatesHoc } from './HOCs/CombineStatesHoc';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinents());
  }, [dispatch]);

  return (
    <div className="select-none max-w-4xl m-auto">
      <div className="pb-16 p-2 px-10">
        <CombineStatesHoc />
      </div>
    </div>
  );
};

export default App;
