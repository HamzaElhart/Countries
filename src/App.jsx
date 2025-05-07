import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CountriesDetails from "./pages/CountriesDetails";
import { useEffect, useState } from "react";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* Define the root route */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="CountrieDetail/:name"
          element={<CountriesDetails/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
