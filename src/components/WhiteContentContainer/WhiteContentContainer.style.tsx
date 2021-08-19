import styled from "styled-components";

export const ContentContainerStyle = styled.div`
  width: 860px;
  @media only screen and (max-width: 859px) {
    width: 100%;
  }
  background-color: #fff;
  padding: 32x 0;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 600px;
  // padding: 1em 1em 2em 1em;
  p {
    padding: 0.5em 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 16px;
    width: 100%;
  }
`;
