import { Continent, Country, Language } from '../redux/types';
import { API_URL } from './url';

export async function fetchContinentsAPI(): Promise<Continent[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query {
              continents {
                  code
                  name
                  countries {
                    code
                  }
                }
          }
        `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from the server');
  }

  const { data } = await response.json();
  console.log(data);
  return data.continents;
}

export async function fetchCountriesAPI(): Promise<Country[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query {
            countries {
                name
                code
                languages {
                  code
                }
              }
          }
        `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from the server');
  }

  const { data } = await response.json();
  console.log(data);
  return data.countries;
}

export async function fetchLanguagesAPI(): Promise<Language[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query {
                languages {
                    code
                    name
                  }
            }
          `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from the server');
  }

  const { data } = await response.json();
  console.log(data);
  return data.languages;
}
