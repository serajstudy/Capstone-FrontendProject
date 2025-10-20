import React from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
// import CountryCard from './Components/CountryCard';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Country from './Pages/Country';
import Profile from './Pages/Profile';
import Service from './Pages/Service';

import './App.css';


function App() {
 
  return (
    <>
  
      <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Country />} />
            <Route path="/services" element={<Service />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/api-test" element={<ApiTest />} /> */}
          </Routes>
        </main>
        <Footer />

  
    

      
    </>
  )
}

export default App;

