import { Dispatch, SetStateAction } from 'react';
import { StatusObjects } from '../HOCs/types';
import { Continent, Country, Language } from '../redux/types';

export const tenthSelector = (
  filteredState: Country[] | Continent[] | Language[],
  setStateStatus: Dispatch<SetStateAction<StatusObjects>>,
  stateName: string
) => {
  let lastCode: string | undefined;
  if (filteredState.length >= 10) {
    lastCode = filteredState[9].code;
  } else {
    lastCode = filteredState[filteredState.length - 1]?.code;
  }
  if (lastCode) {
    setStateStatus((prev: StatusObjects) => ({
      ...prev,
      [stateName]: {
        ...prev?.[stateName],
        current: lastCode,
        previous: prev?.[stateName]?.current,
      },
    }));
  }
};
