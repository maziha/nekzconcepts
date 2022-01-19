import React from "react";
import Item from "./Item";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
import Icon4 from "../../images/icon6.svg";
import Icon5 from "../../images/icon7.svg";
import Icon6 from "../../images/icon8.svg";
import Carousel from "react-elastic-carousel";
import {
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  // ServicesP,
} from "./ServicesElements";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <ServicesIcon src={Icon1} alt="nekz concepts" />
          <ServicesH2>Interior</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
        <Item>
          <ServicesIcon src={Icon2} alt="nekz concepts" />
          <ServicesH2>Construction</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
        <Item>
          <ServicesIcon src={Icon3} alt="nekz concepts" />
          <ServicesH2>Furniture</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
        <Item>
          <ServicesIcon src={Icon5} alt="nekz concepts" />
          <ServicesH2>Architecture</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
        <Item>
          <ServicesIcon src={Icon4} alt="nekz concepts" />
          <ServicesH2>Renovation</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
        <Item>
          <ServicesIcon src={Icon6} alt="nekz concepts" />
          <ServicesH2>Landscaping</ServicesH2>
          {/* <ServicesP>We help build your Dream Home</ServicesP> */}
        </Item>
      </Carousel>
    </ServicesContainer>
  );
};

export default Services;
