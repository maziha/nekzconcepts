import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Button } from "../ButtonElements";
// import Icon1 from "../../images/blueprint.svg";
// import Icon2 from "../../images/user.svg";
// import Icon3 from "../../images/suitcase.svg";

// import Image from "../../images/img-1.jpg";
import {
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // BtnWrap,
  Img,
  // Projects,
  // ProjectsIcon,
  // ProjectsH2,
  // ProjectsP,
  // ProjectsWrapper,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  // buttonLabel,
  image,
  alt,
  // primary,
  // dark,
  // dark2,
  headline,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="fade-right">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-40}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2 data-aos="fade-right">
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        {/* <ProjectsWrapper>
          <Projects>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>200+</ProjectsH2>
            <ProjectsP>Projects Completed</ProjectsP>
          </Projects>
          <Projects>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>150+</ProjectsH2>
            <ProjectsP>Happy Customers</ProjectsP>
          </Projects>
          <Projects>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>5+</ProjectsH2>
            <ProjectsP>Years in Service</ProjectsP>
          </Projects>
        </ProjectsWrapper> */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
