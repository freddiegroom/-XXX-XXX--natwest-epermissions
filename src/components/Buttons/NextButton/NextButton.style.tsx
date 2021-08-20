import styled from "styled-components";

export const NextButtonStyle = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  width: 105px;

  height: 44px;
  background-color: #1d7b8a;
  color: #ffffff;
  font-size: 18px;
  // align-self: flex-end;
  cursor: pointer;
  .smallBevel {
    display: none;
  }
  .largeBevel {
    display: block;
    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    img {
      height: 2px;
    }
  }
`;

export const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 105px;
  .smallBevel {
    display: block;
  }
  .largeBevel {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    align-items: center;
    width: 100%;
    .smallBevel {
      display: none;
    }
    .largeBevel {
      display: block;
      width: 90%;
    }
    width: 100%;
    align-items: center;
  }
  margin: 32px 0;
`;
