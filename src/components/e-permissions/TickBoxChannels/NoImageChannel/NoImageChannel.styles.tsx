import styled from "styled-components";

export const ChannelWrapper = styled.div`
  padding: 0.5em 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-drection: column;
    justify-content: center;
    padding: 4px 8px;
  }
`;

export const Channel = styled.div`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction row;
  // justify-content: space-between;
  max-width: 560px;
  min-height: 90px;
  @media only screen and (max-width: 600px) {
   flex-wrap: wrap;
   width: 100%;
   justify-content: space-between;
   min-height: 140px;
  }
`;

export const ClickBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  padding-left: 32px;
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
    padding-top: 24px;
    align-items: flex-start;
    width: 40%;
  }
`;

export const ClickedBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  padding-left: 32px;
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
    padding-top: 24px;
    align-items: flex-start;
    width: 40%;
  }
`;

export const ChannelText = styled.div`
  padding-left: 32px;
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    width: 90%;
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 20px;
      line-height: 24px;
      // padding: 8px;
    }
  }
  .sub {
    color: #666666;
    font-size: 16px;
    line-height: 20px;
  }
  @media only screen and (max-width: 600px) {
    order: 999;
    width: 100%;
    justify-self: flex-start;
    align-self: flex-start;
    padding-left: 8px;
  }
`;
