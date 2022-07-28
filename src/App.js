import React from "react";
// import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Loader from "./components/Loader";
import RegionFilter from "./components/RegionFilter";
import NameFilter from "./components/NameFilter";
import { BsArrowLeft } from "react-icons/bs";

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
    <div className="bg-zinc-50 a font-nunito dark:bg-blue-950 transition ease-linear delay-150 pb-10 mb-auto min-h-screen">
      <Navbar />
      <div className="w-11/12 mx-auto mb-8 lg:flex lg:justify-between lg:w-[86%]">
        <NameFilter searchValue={searchValue} searchCountry={searchCountry} />
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
      s
    </div>
  );
  // return (
  //   <div className="bg-zinc-50 a font-nunito dark:bg-blue-950 transition ease-linear delay-150 pb-10 mb-auto min-h-screen">
  //     <Navbar />
  //     <section className="w-11/12 mx-auto min-h-screen">
  //       <div className="w-28 py-2 px-6 shadow-md dark:bg-blue-1000 rounded-md mb-10 lg:mb-20 transition ease-linear delay-150 2xl:mb-44">
  //         <a
  //           href="#"
  //           className="flex items-center justify-between dark:text-white transition ease-linear delay-150"
  //         >
  //           <span>
  //             <BsArrowLeft className="dark:fill-white transition ease-linear delay-150" />
  //           </span>
  //           Back
  //         </a>
  //       </div>
  //       <div className="md:flex mx-auto md:items-center md:justify-around">
  //         <div className="p-4 rounded-md shadow-md dark:bg-gray-800 h-60 transition ease-linear delay-150 mb-6 mx-auto md:w-[50%] lg:w-[50%] lg:h-96 ">
  //           <img
  //             src="https://source.unsplash.com/random"
  //             alt=""
  //             className="w-full max-h-full object-cover"
  //           />
  //         </div>
  //         <div className="w-11/12 mx-auto md:w-[40%] dark:text-white">
  //           <h1 className="text-2xl font-extrabold mb-4 text-center lg:text-start">
  //             Beligum
  //           </h1>
  //           <div className="grid gap-1 mb-4 lg:grid-rows-5 lg:grid-flow-col">
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Native Name:</span> Belgie
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Population:</span> 11319511
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Region:</span> Europe
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Sub Region:</span> Wester Europe
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Capital:</span> Brussels
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Top Level Domain:</span> .be
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Currencies:</span> Euro
  //             </h5>
  //             <h5 className="pb-2">
  //               <span className="font-semibold">Language:</span> French
  //             </h5>
  //           </div>
  //           <div className="flex items-center flex-wrap">
  //             <h2 className="font-bold mr-3">Border-countries:</h2>
  //             <span className="py-2 px-4 shadow-md rounded-md mr-2">
  //               France
  //             </span>
  //             <span className="py-2 px-4 shadow-md rounded-md mr-2">
  //               Germany
  //             </span>
  //             <span className="py-2 px-4 shadow-md rounded-md mr-2">
  //               Netherland
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};
export default App;
