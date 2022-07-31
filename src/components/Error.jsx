import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="w-11/12 mx-auto  py-20">
      <div className="text-center dark:text-white ">
        <h1 className="text-2xl font-nunito font-bold tracking-widest transition ease-linear delay-150 mb-5">
          oops! it's a dead end
        </h1>
        <Link
          to="/"
          className="p-2 px-5 rounded-md transition ease-in-out delay-150 bg-blue-300 hover:bg-blue-400 font-bold dark:bg-teal-400 dark:hover:bg-teal-500"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
