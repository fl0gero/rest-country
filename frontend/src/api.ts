export type CountryData = {
  altSpellings: Array<string>;
  area: number;
  borders: Array<string> | undefined;
  capital: Array<string> | undefined;
  coatOfArms: { png: string; svg: string };
  continents: Array<string>;
  currencies: Record<string, { name: string; symbol: string }>;
  flag: string;
  flags: { alt: string; png: string; svg: string };
  idd: { root: string; suffixes: Array<string> };
  name: {
    nativeName: Record<string, { official: string }>;
    official: string;
  };
  languages: Record<string, string>;
  latlng: Array<number>;
  tld: Array<string>;
  population: number;
  region: string;
  subregion: string;
  timezones: Array<string>;
};

export type ServerError = {
  status: number;
  message: string;
};

export type NotFoundError = ServerError & {
  status: 404;
};

export type UnexpectedServerError = ServerError & {
  status: 500;
};

export type GetCountryResponse = CountryData[] | NotFoundError;

export async function findCountryInformation(country: string) {
  try {
    const response = await fetch(
      "/api?" +
        new URLSearchParams({
          country: country,
        }),
    );
    return (await response.json()) as GetCountryResponse;
  } catch {
    return new Error("Unexpected error while fetching countries");
  }
}

export async function findBorderCountryInformation(countryBorder: string) {
  try {
    const response = await fetch(
      "/api/country-border/?" +
        new URLSearchParams({
          countryBorder: countryBorder,
        }),
    );
    return (await response.json()) as GetCountryResponse;
  } catch {
    return new Error("Unexpected error while fetching country borders");
  }
}
