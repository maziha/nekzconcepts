import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GlobalStyle from "../globalStyles";
// import Hero from "./components/Hero";
// import { SliderData } from "./data/SliderData";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/InfoSection/Data";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <Hero slides={SliderData} /> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjOneTwo} /> */}
      <Services />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
