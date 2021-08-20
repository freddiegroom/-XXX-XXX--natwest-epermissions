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
  @media only screen and (max-width: 600px) {
    line-height: 28px;
    padding-left: 8px;
  }
  margin: 0;
`;

export const RegularText = styled.p`
  font-size: 16px !important;
  line-height: 24px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
