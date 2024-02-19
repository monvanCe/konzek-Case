export interface Continent {
  name: string;
  code: string;
  countries: {
    code: string;
  }[];
}

export interface Country {
  name: string;
  code: string;
  languages: {
    code: string;
  }[];
}

export interface Language {
  code: string;
  name: string;
}

export interface ContinentsState {
  data: Continent[];
  loading: boolean;
  error: string | null;
}

export interface CountriesState {
  data: Country[];
  loading: boolean;
  error: string | null;
}

export interface LanguagesState {
  data: Language[];
  loading: boolean;
  error: string | null;
}

export interface CombineStates {
  continents: ContinentsState;
  countries: CountriesState;
  languages: LanguagesState;
  [key: string]: ContinentsState | CountriesState | LanguagesState;
}
