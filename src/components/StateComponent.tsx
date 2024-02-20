import React, { useEffect, useMemo } from 'react';
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

  const filteredState = useMemo(() => {
    if (!stateStatus[stateName]?.searchText) {
      return state.data;
    }
    return state.data.filter((item) =>
      item.name.toLowerCase().includes(stateStatus[stateName]!.searchText!)
    );
  }, [stateStatus[stateName]?.searchText]);

  useEffect(() => {
    let lastCode: string | undefined;
    if (filteredState.length >= 10) {
      lastCode = filteredState[9].code;
    } else {
      lastCode = filteredState[filteredState.length - 1].code;
    }

    setStateStatus((prev: StatusObjects) => ({
      ...prev,
      [stateName]: {
        ...prev?.[stateName],
        current: lastCode,
        previous: prev?.[stateName]?.current,
      },
    }));
  }, [stateStatus[stateName]?.searchText]);

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
    <div className="pr-2">
      <SearchInput
        stateName={stateName}
        stateStatus={stateStatus}
        setStateStatus={setStateStatus}
      />
      {filteredState?.map((item) => (
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
