import React from "react";

const Details = (props) => {
  console.log();
  return (
    <div className="w-4/5 mx-auto rounded-md shadow-md z-10 dark:text-white dark:bg-blue-1000 transition ease-linear delay-150">
      <img
        src={props.country.flags.png}
        alt=""
        className="w-full h-52 rounded-t-md pb-4 object-fill"
      />
      <div className="px-6">
        <h1 className="font-extrabold text-2xl pb-2">
          {props.country.name.common}
        </h1>
        <h5 className="font-semibold pb-2">
          Population: {props.country.population}
        </h5>
        <h5 className="font-semibold pb-2">Region: {props.country.region}</h5>
        <h5 className="font-semibold pb-8">Capital: {props.country.capital}</h5>
      </div>
    </div>
  );
};

export default Details;
