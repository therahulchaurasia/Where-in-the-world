import React from "react";
// import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Loader from "./components/Loader";
import RegionFilter from "./components/RegionFilter";
import NameFilter from "./components/NameFilter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";
import Error from "./components/Error";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterToggle, setFilterToggle] = useState(true);
  const searchValue = useRef("");
  let url = "https://restcountries.com/v3.1";
  let value = "/all";
  const fetchData = async () => {
    if (value === "/name/") {
      value = "/all";
    }
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
  }, [value]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const toggleFilter = () => {
    setFilterToggle(!filterToggle);
  };
  const searchCountry = (e) => {
    value = "/name/" + searchValue.current.value;
    setLoading(true);
    console.log(value);
    fetchData();
  };
  const setVal = (regi) => {
    value = "/region/" + regi;
  };
  return (
    <BrowserRouter>
      <div className="bg-zinc-50 a font-nunito dark:bg-blue-950 transition ease-linear delay-150 pb-10 mb-auto min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="w-11/12 mx-auto mb-8 lg:flex lg:justify-between lg:w-[86%]">
                  <NameFilter
                    searchValue={searchValue}
                    searchCountry={searchCountry}
                  />
                  <RegionFilter
                    setVal={setVal}
                    setLoading={setLoading}
                    toggleFilter={toggleFilter}
                    fetchData={fetchData}
                    filterToggle={filterToggle}
                  />
                </div>
                {loading ? <Loader /> : ""}
                {countries.length ? (
                  <div className="grid gap-y-11 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-16 sm:gap-x-0 lg:w-11/12 mx-auto dark:bg-blue-950 transition ease-linear delay-150 2xl:grid-cols-4">
                    {countries.map((country, index) => {
                      return <Details key={index} country={country} />;
                    })}
                  </div>
                ) : (
                  <div className="w-11/12 mx-auto">
                    <h1 className="text-center text-2xl mt-24 dark:text-white">
                      Nothing to see here! \(o_o)/
                    </h1>
                  </div>
                )}
              </div>
            }
          />
          <Route path="/country/:id" element={<SingleCountry />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
