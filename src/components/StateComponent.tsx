import React, { useEffect, useMemo } from 'react';
import {
  CombineStates,
  ContinentsState,
  CountriesState,
  LanguagesState,
} from '../redux/types';
import { SearchInput } from './SearchInput';
import { useSelector } from 'react-redux';
import { StateComponentProps } from './types';
import { StatusObjects } from '../HOCs/types';
import ErrorComponent from './ErrorComponent';
import { filterFuncstion } from '../utils/filterFunction';
import { tenthSelector } from '../utils/tenthSelector';

export const StateComponent: React.FC<StateComponentProps> = ({
  stateName,
  stateStatus,
  setStateStatus,
}) => {
  const state = useSelector((states: CombineStates) => states[stateName]) as
    | ContinentsState
    | CountriesState
    | LanguagesState;
  const states = useSelector((states) => states) as CombineStates;

  const filteredState = useMemo(() => {
    return filterFuncstion(stateStatus, stateName, state, states);
  }, [stateStatus[stateName]?.searchText, state, stateStatus]);

  useEffect(() => {
    tenthSelector(filteredState, setStateStatus, stateName);
  }, [filteredState.length]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <ErrorComponent />;
  }

  const handleClick = (code: string) => {
    setStateStatus((prev: StatusObjects) => ({
      ...prev,
      [stateName]: {
        ...prev?.[stateName],
        current: code === prev?.[stateName]?.current ? undefined : code,
        previous: prev?.[stateName]?.current,
      },
    }));
  };

  const backgroundColor = (code: string) => {
    if (!stateStatus) {
      return 'bg-white';
    }
    if (stateStatus[stateName]?.current === code) {
      return 'bg-indigo-300';
    }
    if (stateStatus[stateName]?.previous === code) {
      return 'bg-orange-300';
    }
    return 'bg-white';
  };

  return (
    <div className="pr-2 relative">
      <SearchInput
        stateName={stateName}
        stateStatus={stateStatus}
        setStateStatus={setStateStatus}
      />
      {filteredState?.map((item) => (
        <div
          key={item.code}
          className={`h-10 mb-2 px-4 items-center flex shadow-inner rounded-full cursor-pointer hover:shadow-lg ${backgroundColor(
            item.code
          )}`}
          onClick={() => {
            handleClick(item.code);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
