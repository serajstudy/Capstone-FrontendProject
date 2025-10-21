import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard.jsx";
import Form from "../components/Form.jsx";
import { getCountries } from "../api/countries";

// Import all flag images
import usaFlag from "../assets/images/us.svg";
import ukFlag from "../assets/images/gb.svg";
import ausFlag from "../assets/images/au.svg";
import canadaFlag from "../assets/images/ca.svg";
import nzFlag from "../assets/images/nz.svg";
import deFlag from "../assets/images/de.svg"; // Germany

console.log("NZ Flag:", nzFlag);


// Map country names to flags
const flagMap = {
  "United States": usaFlag,
  "United Kingdom": ukFlag,
  "Australia": ausFlag,
  "Canada": canadaFlag,
  "New Zealand": nzFlag,
  "Germany": deFlag,
};

function Country() {
  const [countries, setCountries] = useState([]);
  const userId = "65a1b2c3d4e5f67890123456"; // Example logged-in user

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        console.log("Fetched countries:", data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div className="countries-page">
      <h2>Study Abroad Destinations</h2>

      <div className="countries-grid">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            name={country.name}
            description={country.description}
            // Use flagMap if exists; undefined flags will just not show an image
            image={flagMap[country.name]}
          />
        ))}
      </div>
      

      Form box for first country as example
      {countries.length > 0 && (
        <Form
          userId={userId}
          // Use optional chaining in case _id is missing
          countryId={countries[0]?._id || countries[0]?.name}
        />
      )}
    </div>
  );
}

export default Country;
