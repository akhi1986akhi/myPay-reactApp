import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <AboutUs/>
    <Services/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
