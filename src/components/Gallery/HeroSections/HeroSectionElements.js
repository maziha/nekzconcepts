import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 900px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

&::before {
    content:'',
    position:absolute;
    z-index:2;
    width:100%;
    height:100%;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%,)
}


`;
export const HeroImage = styled.img`
  position: absolute;
  left: 0;
  filter: brightness(50%);
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.8rem;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 420px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    font-weight: 400;

    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 1;
`;
