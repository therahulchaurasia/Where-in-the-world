import React from "react";

const Details = (props) => {
  console.log();
  return (
    <div className="w-4/5 mx-auto shadow-md z-10">
      <img
        src={props.country.flags.svg}
        alt=""
        className="w-full h-44 rounded-t-md pb-4 "
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
