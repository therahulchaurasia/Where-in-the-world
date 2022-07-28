import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import data from "./data";

const RegionFilter = (props) => {
  // console.log(props);
  const { toggleFilter, filterToggle, setVal, setLoading, fetchData } = props;
  return (
    <div>
      <div className="z-50 ">
        <div className="select-group">
          <button
            id="button"
            className="flex items-center justify-between shadow-md px-4 py-6 w-48 h-12 rounded-md dark:text-white dark:bg-blue-1000 mb-1 lg:py-8 transition ease-linear delay-150"
            onClick={() => {
              toggleFilter();
            }}
          >
            <span id="select-label" className="pl-2">
              Filter By Region
            </span>
            <div id="arrow" className="arrow">
              <BiChevronDown className="text-xl" />
            </div>
          </button>
        </div>
        <div
          className={`${
            filterToggle ? "hidden" : "block"
          } shadow-md w-48 p-2 rounded-md dark:text-white dark:bg-blue-1000 transition ease-linear delay-150`}
        >
          {data.map((val) => {
            return (
              <li
                className="list-none px-4 py-0.5 cursor-pointer"
                key={val.id}
                onClick={() => {
                  let holder = `${val.region.toLowerCase()}`;
                  // console.log(value);
                  setVal(holder);
                  setLoading(true);
                  toggleFilter();
                  fetchData();
                }}
              >
                {val.region}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegionFilter;
