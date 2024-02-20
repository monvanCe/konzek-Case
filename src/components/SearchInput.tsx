import React from 'react';
import { SearchInputProps } from './types';
import { StatusObjects } from '../HOCs/types';

export const SearchInput: React.FC<SearchInputProps> = ({
  stateName,
  stateStatus,
  setStateStatus,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateStatus((prev: StatusObjects) => ({
      ...prev,
      [stateName]: { ...prev[stateName], searchText: e.target.value },
    }));
  };

  return (
    <input
      type="text"
      className="h-10 mb-2 px-4 w-5/6 items-center border rounded-full outline-0 focus:border-black"
      placeholder="Search"
      value={stateStatus[stateName]?.searchText}
      onChange={handleChange}
    />
  );
};
