import styled from "styled-components";

export const HeaderStyle = styled.div`
  max-width: 975px;
  background-color: #2e0a3d;
  color: white;
  @media only screen and (min-width: 600px) {
    min-height: 184px;
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #2e0a3d;
  display: flex;
  justify-content: center;
`;

export const IconRow = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  // padding-left: 18px;
  img {
    padding-left: 8px;
  }
  @media only screen and (max-width: 600px) {
    height: 40px;
    img {
      padding-left: 4px;
    }
  }
`;

export const TitleRow = styled.div`
  width: 975px;
  // height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 975px) {
    width: 100%;
    min-height: 115px;
  }
  h1 {
    width: 100%;
    padding-left: 8px;
    font-size: 40px;
    @media only screen and (max-width: 600px) {
      font-size: 32px;
      margin: 0;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 0 16px;
    }
  }
  img {
    // width: 120px;
    height: 120px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
