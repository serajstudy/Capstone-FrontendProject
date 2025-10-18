import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="fw-bold mb-3">Welcome to BaseEducation Consultancy</h1>
      <p className="lead">Helping students achieve their study abroad dreams in the USA, UK, Canada, Australia, and New Zealand.</p>
      <Link className="btn btn-primary btn-lg mt-3" to="/countries">Explore Countries</Link>
    </div>
  );
}

export default Home;
