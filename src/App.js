import React from "react";
// import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Details from "./components/Details";

const App = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="bg-zinc-50 a font-nunito">
      <Navbar />
      <div className="w-11/12 mx-auto mb-8">
        <div className="flex items-center mx-auto h-16 shadow-md p-6 rounded-md mb-12">
          <AiOutlineSearch className="text-3xl fill-gray-400" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-4 w-full outline-none"
          />
        </div>
        {/* <select
          name="regions"
          className="outline-none border-none p-4 shadow-md rounded-md"
        >
          <option value="" hidden>
            Filter By Region
          </option>
          <option value="Africa" className="p-4">
            Africa
          </option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select> */}
        <div className="z-50 ">
          <div className="select-group">
            <button
              id="button"
              className="flex items-center justify-between shadow-md px-4 py-6 w-48 h-12 rounded-md"
            >
              <span id="select-label" className="pl-2">
                Filter By Region
              </span>
              <div id="arrow" className="arrow">
                <BiChevronDown className="text-xl" />
              </div>
            </button>
          </div>
          <div className="shadow-md w-48 p-2 rounded-md hidden">
            {data.map((val) => {
              return (
                <li
                  className="list-none px-4 py-0.5 cursor-pointer"
                  key={val.id}
                  onClick={() => {
                    console.log(val.region);
                  }}
                >
                  {val.region}
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-y-6 lg:grid-cols-4">
        {countries.map((country, index) => {
          return <Details key={index} country={country} />;
        })}
      </div>
    </div>
  );
};
export default App;
