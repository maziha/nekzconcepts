import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 80px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
`;

export const ContactsContainer = styled.div`
  height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const FormContentLeft = styled.div`
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  border-radius: 0 10px 10px 0;
  position: relative;
`;
export const FormContentRight = styled.div`
  border-radius: 10px 0 0 10px;
  position: relative;
  background: #011522;
`;
export const ContactsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;

  margin-bottom: -50px;

  @media screen and (max-width: 480px) {
    font-size: 2 rem;
  }
`;
export const DetailsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
  border-radius: 20px;
`;

export const DetailsH2 = styled.h2`
  font-size: 1 rem;
  margin-bottom: 10px;
  color: #000;
`;

export const DetailsP = styled.p`
  font-size: 1 rem;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#00D7FF" : "#011522")};
  white-space: npwrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#00D7FF")};
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1 rem;
    & :hover {
      cursor: pointer;
    }
  }
`;
export const Details = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 200px;
  max-height: 340px;
  padding: 30px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  & :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const DetailsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 24px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  & :hover {
    cursor: pointer;
  }
`;
// export const DetailsH1 = styled.div`
//     font-size:128px;
//     color:rgba(10, 20, 29, 0.02);
//     font-weight: 700;
//     text-transform: uppercase;
//     padding: 0;
//     margin: 0;
//     line-height: 1;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     box-sizing: inherit;
//     text-align: left;
//     z-index: -1;
// }

// `;
