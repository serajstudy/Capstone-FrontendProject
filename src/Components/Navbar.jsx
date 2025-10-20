import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand"><Link to="/"><button>BaseEducation</button></Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/countries">Countries</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
    
  );
}
