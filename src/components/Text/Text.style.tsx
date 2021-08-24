import styled from "styled-components";

export const TextBlock = styled.div`
  padding-bottom: 1em;
  padding: 1em;
`;

export const NarrowText = styled.p`
  max-width: 478px;
`;

export const WideText = styled.p`
  max-width: 600px;
`;

export const HeadingText = styled.p`
  font-size: 20px !important;
  line-height: 32px;
  padding-left: 16px;
  margin: 0;
  @media only screen and (max-width: 600px) {
    line-height: 28px;
    padding-left: 8px;
    width: 95%;
    margin: 8px 0;
  }
`;

export const RegularText = styled.p`
  font-size: 16px !important;
  line-height: 24px;
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-family: RNHouseSans-Bold;
`;

export const PaddingDiv = styled.div`
  height: 32px;
  width: 100%;
`;

export const RedText = styled.div`
  color: #c8001e;
`;
