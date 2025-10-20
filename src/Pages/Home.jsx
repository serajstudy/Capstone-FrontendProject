import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="text-center">
        <h1 className="fw-bold mb-3">Welcome to BaseEducation Consultancy</h1>
        <p className="lead">
          Helping students achieve their study abroad dreams in the USA, UK, Canada, Australia, and New Zealand.
          We guide you through university selection, application, visa processing, and pre-departure preparation.
        </p>
        <Link className="btn btn-primary btn-lg mt-3" to="/countries">
          Explore Countries
        </Link>
        <Link className="btn btn-secondary btn-lg mt-3" to="/api-test">
        Test APIs
        </Link>
      </header>

      <section className="services-section mt-5">
        <h2>Our Services</h2>
        <ul>
          <li>🎓 Admission Guidance - Choosing the right universities and courses</li>
          <li>📄 Visa Assistance - Expert guidance on student visa applications</li>
          <li>🏠 Accommodation Support - Help finding housing abroad</li>
          <li>💬 Counseling & Application Support - Personalized assistance for applications</li>
          <li>💰 Scholarship Assistance - Find and apply for scholarships worldwide</li>
        </ul>
      </section>

      <section className="study-destinations mt-5">
        <h2>Popular Study Destinations</h2>
        <p>
          🌎 USA | 🇬🇧 UK | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand
        </p>
        <p>
          Our team helps students from all over the world to make their study abroad journey smooth, safe, and successful.
        </p>
      </section>

      <section className="cta-section mt-5 text-center">
        <h3>Ready to Start Your Journey?</h3>
        <p>Get in touch with our expert counselors today and take the first step towards studying abroad.</p>
       
      </section>
    </div>
  );
}

export default Home;
