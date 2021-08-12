import styled from "styled-components";

export const TextContainerStyle = styled.div`
  padding: 20px 24px 0 24px;
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding-bottom: 18px;
  }
`;

export const ColourBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${(props) => props.color || "#D8D2E8"};
  margin: 0;
  margin-bottom: 35px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const TickContainer = styled.div`
  display: flex;
  // flex: 1;
  width: 300px;
  padding: 16px;
  img {
    width: 24px;
    height: 20px;
    margin-top: 14px;
  }
`;

export const PurpleCard = styled.div`
  background-color: #42145f;
  padding: 0.5em;
`;

export const Card = styled.div`
  width: 100%;
  padding: 1em;
`;

export const CardRow = styled.div`
  display: flex;
  color: #fff;
  p {
    display: flex;
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex: 1;
    margin: 0;
  }
`;

export const BlueText = styled.span`
  color: #009fac;
  text-decoration: underline;
`;

// export const CardRow = styled.div``;
