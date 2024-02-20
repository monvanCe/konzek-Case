interface StatueObject {
  searchText?: string;
  grupSize?: number;
  previous?: string;
  current?: string;
}

export interface StatusObjects {
  continents: StatueObject;
  countries: StatueObject;
  languages: StatueObject;
  [key: string]: StatueObject;
}
