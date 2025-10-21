import React from "react";

function CountryCard({ name, image, description }) {
  return (
    <div className="country-card">
      {image && (
        <img
          src={image || ""}
          alt={name}
          className="country-flag"
          onError={(e) => { e.target.style.display = "none"; }} 
        />
        
      )}
      
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default CountryCard;
