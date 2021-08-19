import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  background-color: #2e0a3d;
  color: white;
  height: 184px;
  @media only screen and (max-width: 600px) {
    height: 155px;
  }
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
  width: 100%;
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 115px;
  }
  h1 {
    width: 712px;
    padding-left: 28px;
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
    width: 120px;
    height: 120px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
