import React, { useState, useContext, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { DataContext } from "../pages/Home"; //import the Context 'DataContext'

const SearchFilter = () => {
  const { data, originalData, error, setData } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleIsOpen = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleUserInput = (e) => {
    const inputValue = e.target.value.toLowerCase();

    if (e.key === "Delete" && inputValue === "") {
      setData(originalData);
      // console.log("Delete action occurred! Resetting data.");
    } else {
      setUserInput(inputValue);
      let new_Data = originalData.filter((countrie) =>
        countrie.name.toLowerCase().includes(inputValue)
      );
      setData(new_Data);
    }
  };

  return (
    <div className="flex flex-col w-full gap-10 md:flex-row md:justify-between ">
      <div className="flex gap-1.5 h-[60px] bg-[#ffffff] dark:bg-[#2b3945] shadow-lg rounded-lg md:flex-grow md:max-w-[493px] flex-1">
        <button className="flex items-center justify-center relative top-0 bottom-0 left-[20px]">
          <IoSearchSharp className="text-2xl" />
        </button>
        <input
          id="userInput"
          type="text"
          placeholder="Search for a country..."
          className="h-[60px] rounded-tr-[8px] rounded-br-[8px] focus:outline-0 p-7"
          value={userInput}
          onChange={handleUserInput}
        />
      </div>
      <div className="relative md:flex-grow md:max-w-[20rem]">
        <div
          className="bg-[#ffffff] dark:bg-[#2b3945] shadow-lg p-5 flex items-center justify-between hover:cursor-pointer rounded-[8px]"
          onClick={handleIsOpen}
        >
          Filter by Region {isOpen ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        {isOpen && (
          <div className="mt-2 absolute left-0 right-0 z-10 animate-dropDown">
            <ol className="flex flex-col gap-4 px-8 py-6 bg-[#ffffff] dark:bg-[#2b3945] shadow-lg rounded-[8px]">
              <li className="cursor-pointer">Africa</li>
              <li className="cursor-pointer">America</li>
              <li className="cursor-pointer">Asia</li>
              <li className="cursor-pointer">Europe</li>
              <li className="cursor-pointer">Oceania</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
