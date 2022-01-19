import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Gallery from "../components/Gallery";
import Hero from "../components/Gallery/HeroSections";
import Navbar from "../components/GalleryNavbar";
import SliderData from "../components/Gallery/HeroSections/SliderData";
import Footer from "../components/Gallery/Footer";
import GlobalStyle from "../globalStyles";
const VisitGallery = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
      <Gallery />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default VisitGallery;
