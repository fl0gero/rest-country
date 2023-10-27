import { Fragment } from "react";
import { CountryData } from "../api";

type CountryProps = {
  data: CountryData;
  onSearchBorderCountryButtonClick: (borderCountry: string) => void;
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Country = ({
  data,
  onSearchBorderCountryButtonClick,
}: CountryProps) => {
  const currencies = Object.values(data.currencies);
  const languages = Object.values(data.languages);
  const nativeName = Object.values(data.name.nativeName);
  return (
    <>
      <div className="h-min-[25rem] my-10 rounded-lg py-4 md:flex md:items-center md:justify-between">
        <img
          className="mx-auto md:mx-0 md:my-auto md:w-1/2"
          src={data.flags.png}
          alt=""
        />
        <article className="my-auto mt-2 flex w-full flex-col gap-1 md:w-1/3">
          <h1 className="mb-2 text-3xl">
            {data.name.official}, {data.altSpellings[0]} {data.flag}
          </h1>
          <p>
            Native name:{" "}
            <span className="text-zinc-400">{nativeName[0].official}</span>
          </p>
          <p>
            Area:{" "}
            <span className="text-zinc-400">{`${numberWithCommas(
              data.area,
            )} km2`}</span>
          </p>
          <p>
            Population:{" "}
            <span className="text-zinc-400">
              {numberWithCommas(data.population)}
            </span>
          </p>
          <p>
            Region: <span className="text-zinc-400">{data.region}</span>
          </p>
          <p>
            Subregion: <span className="text-zinc-400">{data.subregion}</span>
          </p>
          <p>
            Capital:{" "}
            <span className="text-zinc-400">
              {data.capital ?? "No capital"}
            </span>
          </p>
          <p>
            Main domen: <span className="text-zinc-400">{data.tld[0]}</span>
          </p>
          <p>
            Currencies:{" "}
            <span className="text-zinc-400">
              {currencies[0].name}, {currencies[0].symbol}
            </span>
          </p>
          <p>
            Languages:{" "}
            <span className="text-zinc-400">
              {languages.map((language, index) =>
                index !== languages.length - 1 ? (
                  <span key={index}> {language},</span>
                ) : (
                  <span key={index}> {language}</span>
                ),
              )}
            </span>
          </p>
          <p>
            Border countries:
            {data.borders ? (
              data.borders.map((borderCountry, index) => (
                <Fragment key={index}>
                  {" "}
                  <button
                    key={index}
                    onClick={() =>
                      onSearchBorderCountryButtonClick(borderCountry)
                    }
                    className="m-1 rounded-lg border-2 border-zinc-400 px-2 text-zinc-400 transition duration-300 ease-in-out hover:scale-110 active:scale-100"
                  >
                    {borderCountry}
                  </button>
                </Fragment>
              ))
            ) : (
              <span className="text-zinc-400"> No border countries</span>
            )}
          </p>
        </article>
      </div>
    </>
  );
};
