import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const NavBar = () => {
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    let html_elem = document.getElementById("root");
    // console.log(html_elem);
    isDark
      ? html_elem.classList.add("dark")
      : html_elem.classList.remove("dark");
    setIsDark(isDark ? false : true);
  };

  return (
    <div className="flex items-center justify-between p-[28px] bg-[#ffffff] dark:bg-[#2b3945] shadow-md gap-2">
      <div>
        <h3 className="font-bold text-[1.2rem] sm:text-[1.5rem]">
          Where in the world?
        </h3>
      </div>
      <div>
        <button
          className="flex gap-1.5 justify-center items-center hover:cursor-pointer hover:bg-[#dbdbdb] dark:hover:bg-[#202c37] p-[10px] rounded-md transition duration-200"
          onClick={handleDarkMode}
        >
          {isDark ? (
            <>
              {" "}
              <FaMoon /> Dark Mode{" "}
            </>
          ) : (
            <>
              {" "}
              <FaSun /> Light Mode{" "}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
