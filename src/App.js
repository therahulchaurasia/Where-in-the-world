import React from "react";
// import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Details from "./components/Details";
import Loader from "./components/Loader";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterToggle, setFilterToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  let url = "https://restcountries.com/v3.1";
  let value = "/all";
  const fetchData = async () => {
    fetch(`${url}${value}`)
      .then((data) => data.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
    try {
      const response = await fetch(`${url}${value}`);
      const data = await response.json();
      if (data) {
        setCountries(data);
        setLoading(false);
      } else {
        console.log("hello");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  const toggleFilter = () => {
    setFilterToggle(!filterToggle);
  };
  return (
    <div className="bg-zinc-50 a font-nunito dark:bg-blue-950 transition ease-linear delay-150">
      <Navbar />
      <div className="w-11/12 mx-auto mb-8 lg:flex lg:justify-between lg:w-[86%]">
        <div className="flex items-center mx-auto h-16 shadow-md p-6 rounded-md mb-12 dark:bg-blue-1000 lg:mx-0 transition ease-linear delay-150">
          <AiOutlineSearch className="text-3xl fill-gray-400 dark:fill-white" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-4 w-full outline-none dark:bg-blue-1000 dark:placeholder:text-white dark:text-white dark:caret-cyan-500 lg:w-96 transition ease-linear delay-150"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              value = `/name/${inputValue}`;
            }}
          />
        </div>
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
                  onClick={(e) => {
                    value = `/region/${val.region.toLowerCase()}`;
                    console.log(value);
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

      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-y-11 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-16 sm:gap-x-0 lg:w-11/12 mx-auto dark:bg-blue-950 transition ease-linear delay-150">
          {countries.map((country, index) => {
            return <Details key={index} country={country} />;
          })}
        </div>
      )}
    </div>
  );
};
export default App;
