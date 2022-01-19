import React, { useState } from "react";
import Image from "../../videos/4.jpg";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={Image} alt="nekz concepts" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Modern Homes</HeroH1>
        <HeroP>
          We give meaning to space through profound form and function.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
