import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  console.log();
  return (
    <Link
      to={`/country/${props.country.cca3}`}
      className="w-4/5 mx-auto rounded-md shadow-md z-10 dark:text-white dark:bg-blue-1000 transition ease-linear delay-150 h-96"
    >
      <img
        src={props.country.flags.png}
        alt=""
        className="w-full h-52 rounded-t-md pb-4 object-fill"
      />
      <div className="px-6">
        <h1 className="font-extrabold text-2xl pb-2">
          {props.country.name.common}
        </h1>
        <h5 className=" pb-2">
          <span className="font-semibold">Population:</span>{" "}
          {props.country.population}
        </h5>
        <h5 className=" pb-2">
          <span className="font-semibold">Region:</span> {props.country.region}
        </h5>
        <h5 className="pb-8">
          <span className="font-semibold">Capital: </span>
          {props.country.capital}
        </h5>
      </div>
    </Link>
  );
};

export default Details;
