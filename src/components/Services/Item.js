import styled from "styled-components";

export default styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 340px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  & :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
