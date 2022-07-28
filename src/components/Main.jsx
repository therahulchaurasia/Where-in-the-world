import React from "react";

const Main = () => {
  return (
    <div>
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
        <div className="grid gap-y-11 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-16 sm:gap-x-0 lg:w-11/12 mx-auto dark:bg-blue-950 transition ease-linear delay-150">
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
  );
};

export default Main;
