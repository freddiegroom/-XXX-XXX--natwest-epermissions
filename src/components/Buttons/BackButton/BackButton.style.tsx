import styled from "styled-components";

export const BackButtonStyle = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  width: 205px;
  height: 44px;
  background-color: #1d7b8a;
  color: #ffffff;
  font-size: 18px;
  // align-self: flex-end;
  cursor: pointer;
  .smallBevel {
    display: none;
    height: 4px;
  }
  .largeBevel {
    display: block;
    @media only screen and (max-width: 600px) {
      // width: 90%;
      height: 4px;
    }
  }
  @media only screen and (max-width: 600px) {
    // width: 90%;
    img {
      height: 2px;
    }
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 205px;
  @media only screen and (max-width: 600px) {
    margin: 32px 16px;
  }
  margin: 32px 0;
`;

export const LargeBevel = styled.img`
  display: flex;
  width: 100%;
  height: 4px;
`;
