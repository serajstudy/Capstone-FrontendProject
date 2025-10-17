import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import CountryCard from './Components/CountryCard';
import Footer from './Components/Footer';


import './App.css'

function App() {
 
  return (
    <>
    <Navbar/>
    <CountryCard/>
    <Footer/>




      
    </>
  )
}

export default App
