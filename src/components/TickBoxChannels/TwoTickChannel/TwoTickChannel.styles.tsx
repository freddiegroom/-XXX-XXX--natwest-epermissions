import styled from "styled-components";

export const ChannelWrapper = styled.div`
  padding: 0.5em 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Channel = styled.div`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction row;
  justify-content: space-between;
  max-width: 560px;
  min-height: 90px;
  @media only screen and (max-width: 600px) {
   flex-wrap: wrap;
   width: 90%;
   justify-content: space-between;
   min-height: 140px;
  }
`;

export const ClickBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
  }
  padding-left: 32px;
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
    padding-top: 24px;
    align-items: flex-start;
  }
  width: 72px;
`;

export const ClickedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
  }
  padding-left: 32px;
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
    padding-top: 24px;
    align-items: flex-start;
  }
  width: 72px;
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
  line-height: 28px;
  p {
    margin: 0;
    padding: 0;
    width: 325px;
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 20px;
      line-height: 28px;
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
    align-self: flex-start;
  }
`;

export const EmailImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding-right: 16px;

  img {
    width: 40px;
    height: 29px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 8px;
  }
`;

export const PostImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding-right: 16px;
  img {
    width: 54px;
    height: 54px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 8px;
  }
`;
export const SocialImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding-right: 16px;
  img {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 8px;
  }
`;

export const TelephoneImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding-right: 16px;
  img {
    width: 39px;
    height: 35px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 8px;
  }
`;

export const TextImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding-right: 16px;
  img {
    width: 24px;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 8px;
  }
`;

export const YesNoContainer = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    width: 94px;
    padding-left: 28px;
    align-self: flex-start;
  }
`;

export const DesktopYesNoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 78px;
  padding-left: 28px;
  align-self: flex-start;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
