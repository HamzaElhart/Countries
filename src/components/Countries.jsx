import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../pages/Home"; //import the Context 'DataContext'
import { Link, Outlet } from "react-router-dom";

const Countries = () => {
  const { data, error } = useContext(DataContext);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 md:grid-row grid-wrap  justify-center items-center">
      {data.map((countrie, index) => (
        <Link to={`CountrieDetail/${countrie.name}`}>
          <div
            className="bg-[#ffffff] dark:bg-[#2b3945] shadow-md rounded-[8px] max-w-[320px] cursor-pointer hover:transform hover:translate-y-[-5px] transition"
            key={index}
          >
            <div className="rounded-tl-[8px] rounded-tr-[8px] w-full h-[200px]">
              <img
                src={countrie.flags.png}
                className="w-full h-full object-cover bg-no-repeat rounded-tl-[8px] rounded-tr-[8px]"
              />
            </div>
            <div className="px-5 py-8 flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{countrie.name}</h2>
              <div>
                <ol className="flex flex-col gap-1">
                  <li key={countrie.population}>
                    Population : {countrie.population}
                  </li>
                  <li key={index}>Region : {countrie.region} </li>
                  <li key={countrie.capital}>Capital : {countrie.capital}</li>
                </ol>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
