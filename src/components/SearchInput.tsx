import React from 'react';
import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({
  stateName,
  stateStatus,
  setStateStatus,
}) => {
  const handleChange = (e: any) => {
    setStateStatus((prev: any) => ({
      ...prev,
      [stateName]: { ...prev[stateName], searchText: e.target.value },
    }));
  };

  return (
    <input
      type="text"
      className="h-10 mb-2 px-4 mx-4 items-center flex border-0 shadow-inner rounded-full focus:outline-0 focus:shadow-md"
      placeholder="Search"
      value={stateStatus[stateName]?.searchText}
      onChange={handleChange}
    />
  );
};
