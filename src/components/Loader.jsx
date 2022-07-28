import React from "react";

const Loader = () => {
  return (
    <div className="dark:bg-blue-950 min-h-screen transition ease-linear delay-150 mt-24">
      <span className="w-12 h-12 block my-5 mx-auto relative after:content-[''] after:w-12 after:h-12 after:left-0 after:bottom-0 after:absolute after:rounded-t-full after:rounded-l-full after:border-[15px] after:border-solid after:border-red-500 after:rotate-45 after:translate-x-0 after:translate-y-0 before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:top-[150%] before:w-6 before:h-1 before:rounded-full before:bg-black before:opacity-40 after:animate-animaker before:animate-shadowmaker dark:before:bg-white transition ease-linear delay-200"></span>
    </div>
  );
};

export default Loader;
