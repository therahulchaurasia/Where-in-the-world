import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
const url = "https://restcountries.com/v3.1/alpha/";

const SingleCountry = () => {
  const { id } = useParams();
  // console.log(`${url}${id}`);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  let a = "";
  let b = "";
  let c = "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        // console.log(data);
        if (data) {
          const {
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            flags,
            borders,
          } = data[0];
          const countryObj = {
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            flags,
            borders,
          };
          setCountry(countryObj);
          // console.log(countryObj);
          setLoading(false);
        } else {
          setCountry(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="w-11/12 mx-auto">
      <div className="w-28 py-2 px-6 shadow-md dark:bg-blue-1000 rounded-md mb-10 lg:mb-20 transition ease-linear delay-150 2xl:mb-44">
        <Link
          to="/"
          className="flex items-center justify-between dark:text-white transition ease-linear delay-150"
        >
          <span>
            <BsArrowLeft className="dark:fill-white transition ease-linear delay-150" />
          </span>
          Back
        </Link>
      </div>
      {loading ? <Loader /> : ""}
      {country ? (
        <div className="md:flex mx-auto md:items-center md:justify-around">
          <div className="p-4 rounded-md shadow-md dark:bg-gray-800 h-60 transition ease-linear delay-150 mb-6 mx-auto md:w-[50%] lg:w-[50%] lg:h-96 ">
            <img
              src={country.flags.svg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 mx-auto md:w-[40%] dark:text-white">
            <h1 className="text-2xl font-extrabold mb-4 text-center lg:text-start">
              {country.name.official}
            </h1>
            <div className="grid gap-1 mb-4 lg:grid-rows-5 lg:grid-flow-col">
              <h5 className="pb-2">
                <span className="font-semibold">Native Name: </span>
                {
                  ((a = Object.values(
                    country.name.nativeName.eng
                      ? country.name.nativeName.eng
                      : country.name.nativeName
                  )),
                  a.map((item, index) => {
                    if (typeof item == "object") {
                      return item.official;
                    }
                    if (typeof item == "string") {
                      return index === 0 ? item : "";
                    }
                    return "";
                  }))
                }
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Population: </span>
                {country.population}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Region: </span> {country.region}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </h5>
              <h5 className="pb-2 inline">
                <span className="font-semibold">Capital: </span>
                {country.capital.toString()}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Top Level Domain: </span>
                {country.tld.toString()}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Currencies: </span>
                {
                  ((b = Object.values(country.currencies)),
                  b.map((curr, index) => {
                    return curr.name ? `${curr.name} ` : "";
                  }))
                }
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Languages: </span>
                {((c = Object.values(country.languages)), c.toString())}
              </h5>
            </div>
            <div className="flex items-center flex-wrap">
              <h2 className="font-bold mr-3">Border-countries:</h2>
              {/* <span className="py-2 px-4 shadow-md rounded-md mr-2">
                France
              </span>
              <span className="py-2 px-4 shadow-md rounded-md mr-2">
                Germany
              </span>
              <span className="py-2 px-4 shadow-md rounded-md mr-2">
                Netherland
              </span> */}
              {country.borders ? (
                country.borders.map((bord, index) => {
                  return (
                    <span
                      key={index}
                      className="py-2 px-4 shadow-md rounded-md mr-2"
                    >
                      {bord}
                    </span>
                  );
                })
              ) : (
                <span className="py-2 px-4 shadow-md rounded-md mr-2">
                  Nothin
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-11/12 mx-auto">
          <h1 className="text-center text-2xl mt-24 dark:text-white">
            "Well that wasn't supposed to happen"
          </h1>
        </div>
      )}
    </section>
  );
};

export default SingleCountry;
