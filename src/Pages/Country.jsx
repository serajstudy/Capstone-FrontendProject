import React from "react";
import CountryCard from "../components/CountryCard.jsx";

//   Paths
import usaFlag from "../assets/images/us.svg";
import ukFlag from "../assets/images/gb.svg";
import ausFlag from "../assets/images/au.svg";
import canadaFlag from "../assets/images/ca.svg";
import nzFlag from "../assets/images/nz.svg";

const countries = [
  {
    name: "United States",
    image: usaFlag,
    description: "Top universities and diverse education."
  },
  {
    name: "United Kingdom",
    image: ukFlag,
    description: "World-class education and cultural heritage."
  },
  {
    name: "Australia",
    image: ausFlag,
    description: "Affordable living and high-quality education."
  },
  {
    name: "Canada",
    image: canadaFlag,
    description: "Safe environment and post-study opportunities."
  },
  {
    name: "New Zealand",
    image: nzFlag,
    description: "Beautiful campuses and supportive study options."
  }
];

function Country() {
  return (
    <div className="countries-page">
      <h2 className="text-center mb-4">Study Abroad Destinations</h2>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <CountryCard key={index} {...country} />
        ))}
      </div>
    </div>
  );
}

export default Country;
