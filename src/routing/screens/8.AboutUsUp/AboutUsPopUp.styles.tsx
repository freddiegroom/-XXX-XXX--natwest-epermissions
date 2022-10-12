import styled from "styled-components";

export const AboutUsRow = styled.div`
  display: flex;
  padding: 8px 0;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AboutUsColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 445px;
  max-width: 100%;
`;

export const AboutUsImage = styled.img`
  max-width: 90%;
`;

export const AboutUsHeading = styled.h3`
  margin: 0;
  font-size: 28px;
  padding: 16px 0;
  font-family: RNHouseSans-Regular !important;
`;

export const AboutUsText = styled.p`
  padding: 0 !important;
  line-height: 24px;
  color: #646068;
  font-size: 18px;
  font-family: RNHouseSans-Regular !important;
`;
