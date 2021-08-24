import styled from "styled-components";

export const TextContainerStyle = styled.div`
  padding-top: 32px;
  width: 975px;
  @media only screen and (max-width: 975px) {
    width: 95%;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    @media only screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      padding: 16px 8px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding-top: 16px;
  }
`;

export const ColourBar = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 24px;
    width: 316px;
  }
  @media only screen and (max-width: 316px) {
    margin-top: 24px;
    width: 100%;
  }
  height: 8px;
  background-color: ${(props) => props.color || "#D8D2E8"};
  margin: 0;
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 32px;
  @media only screen and (max-width: 600px) {
    align-items: center;
    padding-bottom: 0;
  }
`;

export const TickContainer = styled.div`
  display: flex;
  max-width: 300px;
  padding: 16px 8px;
  img {
    width: 24px;
    height: 20px;
  }
`;

export const PurpleCard = styled.div`
  background-color: #42145f;
  padding: 0.5em;
  max-width: 300px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 300px;
  padding: 1em 8px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const CardRow = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: space-evenly;
  // padding-bottom: 8px;
  p {
    display: flex;
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    color: #fff;
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex: 1;
    margin: 0;
    font-weight: normal;
  }
`;
export const PaddedCardRow = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 8px;
  p {
    display: flex;
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    color: #fff;
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex: 1;
    margin: 0;
    font-weight: normal;
  }
`;

export const BlueText = styled.span`
  color: #009fac;
  text-decoration: underline;
`;

export const ChooseButton = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  width: 213px;
  height: 50px;
  background-color: #1d7b8a;
  color: #ffffff;
  font-size: 18px;
  align-self: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
