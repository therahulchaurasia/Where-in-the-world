import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NameFilter = (props) => {
  const { searchValue, searchCountry } = props;
  return (
    <div className="flex items-center mx-auto h-16 shadow-md p-6 rounded-md mb-12 dark:bg-blue-1000 lg:mx-0 transition ease-linear delay-150">
      <AiOutlineSearch className="text-3xl fill-gray-400 dark:fill-white" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="p-4 w-full outline-none dark:bg-blue-1000 dark:placeholder:text-white dark:text-white dark:caret-cyan-500 caret-pink-500 lg:w-96 transition ease-linear delay-150"
        // value={inputValue}
        ref={searchValue}
        onChange={(e) => {
          searchCountry();
        }}
      />
    </div>
  );
};
export default NameFilter;
