import React, { useEffect } from 'react';
import {
  ContinentsState,
  CountriesState,
  LanguagesState,
} from '../redux/types';
import { SearchInput } from './SearchInput';
import { useSelector } from 'react-redux';
import { StateComponentProps } from './types';
import { StatusObjects } from '../HOCs/types';
import ErrorComponent from './ErrorComponent';

export const StateComponent: React.FC<StateComponentProps> = ({
  stateName,
  stateStatus,
  setStateStatus,
}) => {
  const state = useSelector((states: any) => states[stateName]) as
    | ContinentsState
    | CountriesState
    | LanguagesState;

  useEffect(() => {
    console.log(stateStatus);
  }, [stateStatus]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <ErrorComponent />;
  }

  const handleClick = (code: string) => {
    setStateStatus((prev?: StatusObjects) => ({
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
      return 'bg-indigo-600';
    }

    if (stateStatus[stateName]?.previous === code) {
      return 'bg-orange-600';
    }

    return 'bg-white';
  };

  return (
    <div className="pr-2">
      <SearchInput
        stateName={stateName}
        stateStatus={stateStatus}
        setStateStatus={setStateStatus}
      />
      {state.data?.map((item) => (
        <div
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
