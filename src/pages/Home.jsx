import React from "react";
import NavBar from "../components/NavBar.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import Countries from "../components/Countries.jsx";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          setError("error fetching data ");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setOriginalData(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   console.log("data changed : ", data);
  // }, [data]);
  return (
    <div className="dark:bg-[#202c37] bg-[#fcfcfc] font-[14px] dark:text-white text-[#111517]">
      <NavBar></NavBar>
      <div className="p-[28px] flex flex-col gap-10">
        <DataContext.Provider value={{ data, originalData, error, setData }}>
          <SearchFilter />
          <Countries />
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default Home;
