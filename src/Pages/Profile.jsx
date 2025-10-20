  import React from "react";
  import StudyAbroad from "../assets/images/study-abroad.jpg";
  import UniversityCampus from "../assets/images/University.jpg";

  function Profile() {
    return (
      <div className="text-center">
        <h2 className="mb-3">Our Profile</h2>
        <p>
                BaseEducation Consultancy has been guiding students across the world to pursue
                higher education at top-ranked universities in the USA, UK, Canada, Australia,
                and other leading study destinations. Our experienced education advisors provide
                personalized counseling to help you choose the right course and university based
                on your career goals and academic background. From university applications and
                scholarship guidance to visa processing and pre-departure support, we offer
                complete assistance at every step of your study abroad journey. With honest
                advice and a student-first approach, we make your dream of studying abroad
                smooth, simple, and successful.
      </p>
             <div className="about-images">
              {/* react doesnot src /images/study-abroad.jpg inside src/ because React doesn’t serve src files directly.*/}
            {/* <img src="/images/study-abroad.jpg" alt="Study Abroad" />
            // <img src="/images/University.jpg" alt="University Campus" /> */} 

            <img src={StudyAbroad} alt="Study Abroad" />
            <img src={UniversityCampus} alt="University Campus" />      
            </div>
        <p>
    🌍 Offices: New York | London | Sydney | Toronto | Auckland<br/>
    ✉️ Email: info@baseeducation.com | support@baseeducation.com<br/>
    ☎️ Phone: New York: +1 (212) 555-0100 • London: +44 20 7946 0100 • Sydney: +61 2 9012 0100 • Toronto: +1 (416) 555-0100 • Auckland: +64 9 555 0100
  </p>
      </div>
    );
  }

  export default Profile;


