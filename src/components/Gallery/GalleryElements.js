import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 3400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebf3f7;
  @media screen and (max-width: 768px) {
    height: 7000px;
  }
  @media screen and (max-width: 500px) {
    height: 6000px;
  }
  @media screen and (max-width: 1100px) {
    height: 4500px;
  }
  @media screen and (max-width: 480px) {
    height: 7000px;
  }
`;

export const GalleryWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  display: grid;
  background: #ebf3f7;
  border-radius: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 200px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const GalleryCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  max-height: 340px;
  z-index: 2;

  transition: all 0.2s ease-in-out;

  & :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const GalleryIcon = styled.img`
  height: 260px;
  width: 360px;
  border-radius: 20px;
`;
export const GalleryH2 = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const GalleryP = styled.p`
  font-size: 16px;
  text-align: center;
`;
// export const GalleryH1 = styled.h2`
//   font-size: 150px;

//   z-index: 1;
//   color: #dbedf6;
// `;
