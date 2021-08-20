import styled from "styled-components";

export const ContentContainerStyle = styled.div`
  width: 100%;
  background-color: #f2f2f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

export const Container = styled.div`
  max-width: 800px;
  padding: 1em 1em 2em 1em;
  p {
    padding: 0.5em 0;
    margin: 0;
  }
  @media only screen and (max-width: 799px) {
    width: 100%;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    // padding:0 1em;
    p {
      padding: 8px;
      margin: 0;
    }
  }
`;
