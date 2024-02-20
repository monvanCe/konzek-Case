import { StatusObjects } from '../HOCs/types';
import {
  ContinentsState,
  CountriesState,
  LanguagesState,
} from '../redux/types';

export const filterFuncstion = (
  stateStatus: StatusObjects,
  stateName: string,
  state: ContinentsState | CountriesState | LanguagesState,
  states: {
    continents: ContinentsState;
    countries: CountriesState;
    languages: LanguagesState;
  }
) => {
  let filtered;
  if (!stateStatus[stateName].searchText) {
    filtered = state.data;
  }
  filtered = state.data.filter((item) =>
    item.name.toLowerCase().includes(stateStatus[stateName]!.searchText!)
  );
  if (stateName === 'countries' && stateStatus.continents.current) {
    filtered = filtered.filter((item) =>
      states.continents.data
        .find((item) => item.code === stateStatus.continents.current)
        ?.countries.find((el) => el.code === item.code)
    );
  }
  if (stateName === 'languages' && stateStatus.countries.current) {
    filtered = filtered.filter((item) =>
      states.countries.data
        .find((item) => item.code === stateStatus.countries.current)
        ?.languages.find((el) => el.code === item.code)
    );
  }
  return filtered;
};
