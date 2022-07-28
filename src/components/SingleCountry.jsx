import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
const url = "https://restcountries.com/v3.1/alpha/";

const SingleCountry = () => {
  const { id } = useParams();
  console.log(`${url}${id}`);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      console.log(data);
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
        console.log(countryObj);
        setLoading(false);
      } else {
        setCountry(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="w-11/12 mx-auto min-h-screen">
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
              src={country.flags.png}
              alt=""
              className="w-full max-h-full object-cover"
            />
          </div>
          <div className="w-11/12 mx-auto md:w-[40%] dark:text-white">
            <h1 className="text-2xl font-extrabold mb-4 text-center lg:text-start">
              {country.name.official}
            </h1>
            <div className="grid gap-1 mb-4 lg:grid-rows-5 lg:grid-flow-col">
              <h5 className="pb-2">
                <span className="font-semibold">Native Name: </span>
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Population: </span>
                {country.population}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Region: </span> {country.region}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Sub Region:</span>
                {country.subregion}
              </h5>
              <h5 className="pb-2 inline">
                <span className="font-semibold">Capital: </span>
                {country.capital.toString()}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld.toString()}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Currencies:</span>
                {/* {country.currencies} */}
              </h5>
              <h5 className="pb-2">
                <span className="font-semibold">Language:</span>
                {}
              </h5>
            </div>
            <div className="flex items-center flex-wrap">
              <h2 className="font-bold mr-3">Border-countries:</h2>
              <span className="py-2 px-4 shadow-md rounded-md mr-2">
                France
              </span>
              <span className="py-2 px-4 shadow-md rounded-md mr-2">
                Germany
              </span>
              <span className="py-2 px-4 shadow-md rounded-md mr-2">
                Netherland
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>"Well that wasn't supposed to happen"</h1>
        </div>
      )}
    </section>
  );
};

export default SingleCountry;
