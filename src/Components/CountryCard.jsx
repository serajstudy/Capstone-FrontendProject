import React from "react";

function CountryCard({ name, image, description }) {
  return (
    <div className="country-card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default CountryCard;
