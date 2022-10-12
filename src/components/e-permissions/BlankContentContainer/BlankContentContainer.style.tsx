import styled from "styled-components";

export const BlankContentContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

export const BlankContainer = styled.div`
  width: 975px;
  padding: 1em 1em 2em 1em;
  p {
    padding: 0.5em 0;
    margin: 0;
  }
  @media only screen and (max-width: 975px) {
    width: 90%;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    // padding:0 1em;
    p {
      padding: 0 16px;
      margin: 0;
    }
  }
`;
