import React from "react";

const Navbar = () => {
  const darkMode = () => {
    const a = document.querySelector("html");
    // console.log(a);
    a.classList.toggle("dark");
  };
  return (
    <div className="mb-8 ">
      <nav className="flex h-20  w-full items-center justify-between p-6 shadow-md dark:bg-blue-1000 transition ease-linear delay-150">
        <h3 className="font-extrabold dark:text-white lg:pl-10 transition ease-linear delay-150">
          Where in the world?
        </h3>
        <button className="flex items-center" onClick={darkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            className="dark:fill-white transition ease-linear delay-150"
          >
            <path d="M12.05 20q-3.325 0-5.663-2.337Q4.05 15.325 4.05 12q0-3.05 1.987-5.275Q8.025 4.5 10.95 4.1h.15q.075 0 .15.025-.5.7-.8 1.563-.3.862-.3 1.812 0 2.675 1.875 4.537Q13.9 13.9 16.55 13.9q.95 0 1.813-.3.862-.3 1.562-.8 0 .075.013.15.012.075.012.175-.4 2.925-2.625 4.9Q15.1 20 12.05 20Zm0-1q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.15 10.575 9.15 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5.05 9.8 5.05 12q0 2.9 2.05 4.95Q9.15 19 12.05 19Zm-.25-6.75Z" />
          </svg>
          <p className="font-medium pl-2 dark:text-white lg:pr-10 transition linear delay-150 transition ease-linear delay-150">
            Dark Mode
          </p>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
