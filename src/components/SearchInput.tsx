import React from 'react';
import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({
  stateName,
  stateStatus,
  setStateStatus,
}) => {
  return (
    <input
      type="text"
      className="h-10 mb-2 px-4 mx-4 items-center flex border-0 shadow-inner rounded-full text-gray-600 focus:outline-0 focus:shadow-md"
      placeholder="Search"
    />
  );
};
