import styled from "styled-components";

export const ContentContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 860px;
  @media only screen and (max-width: 859px) {
    width: 100%;
  }
  background-color: #fff;
  padding: 32px 0;
  @media only screen and (max-width: 600px) {
    display: flex;
    // justify-content: center;
    // padding: 0 16px;
  }
`;

export const Container = styled.div`
  width: 600px;
  p {
    padding: 4px 0;;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    // align-items: center;
   }
  }
`;
