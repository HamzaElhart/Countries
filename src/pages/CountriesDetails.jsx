import React from "react";
import { useParams } from "react-router-dom";

const CountriesDetails = () => {
  const { name } = useParams();
  return (
    <div className="flex items-center justify-center">
      the countrie name : {name}
    </div>
  );
};

export default CountriesDetails;
