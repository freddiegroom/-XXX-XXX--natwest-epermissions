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
`;

export const AboutUsText = styled.p`
  padding: 0 !important;
  line-height: 24px;
`;
