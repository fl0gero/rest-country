import { Fragment, useState } from "react";
import {
  CountryData,
  ServerError,
  findBorderCountryInformation,
  findCountryInformation,
} from "../api";
import { Country } from "./Country";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

export const Countries = () => {
  const [country, setCountry] = useState<string>();
  const [countriesData, setCountriesData] = useState<CountryData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | ServerError>();

  const onSearchButtonClick = async () => {
    if (country) {
      setLoading(true);
      const data = await findCountryInformation(country);
      if ("status" in data || data instanceof Error) {
        setError(data);
      } else {
        setCountriesData(data);
      }
      setLoading(false);
    }
  };

  const onSearchBorderCountryButtonClick = async (borderCountry: string) => {
    setLoading(true);
    const data = await findBorderCountryInformation(borderCountry);
    if ("status" in data || data instanceof Error) {
      setError(data);
      setLoading(false);
    } else {
      setCountriesData(data);
      setLoading(false);
    }
  };

  return (
    <>
      <header className="flex  h-fit w-full items-center justify-between bg-slate-700 md:h-20 ">
        <nav className="mx-auto flex w-4/5 flex-col justify-between md:flex-row md:items-center">
          <h2 className="m-4  mx-auto h-fit w-fit text-xl md:m-0">
            Get information about countries
          </h2>
          <div className="my-4 flex h-7 w-full items-center justify-center  md:w-1/3 ">
            <input
              className="m-2 h-fit rounded-lg p-1 px-4 text-neutral-900 md:mr-1"
              type="text"
              placeholder="Enter name of country..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button
              className="m-2 h-fit w-20 rounded-lg border-2 border-zinc-200 p-1 transition duration-300 ease-in-out hover:scale-110 active:scale-100 md:ml-1 "
              onClick={onSearchButtonClick}
            >
              Search
            </button>
          </div>
        </nav>
      </header>
      <main>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          countriesData && (
            <div className="mx-auto w-4/5">
              <h3 className="text-zinc-450  my-6 w-fit justify-around text-xl">
                Found results: {countriesData ? countriesData.length : 0}
              </h3>
              {countriesData.map((countryData, index) => (
                <Fragment key={index}>
                  <Country
                    data={countryData}
                    onSearchBorderCountryButtonClick={
                      onSearchBorderCountryButtonClick
                    }
                  />
                  {index !== countriesData.length - 1 ? (
                    <hr className="bg-slate-200" />
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}
            </div>
          )
        )}
      </main>
    </>
  );
};
