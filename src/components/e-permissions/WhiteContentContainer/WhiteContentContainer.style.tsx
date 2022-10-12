import styled from "styled-components";

export const ContentContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  // @media only screen and (max-width: 859px) {
  //   width: 100%;
  // }
  background-color: #fff;
  padding: 32px 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    // justify-content: center;
    // padding: 0 16px;
  }
`;

export const Container = styled.div`
  width: 975px;
  p {
    padding: 2px 0;
    margin: 0;
  }

  @media only screen and (max-width: 975px) {
    width: 100%;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    // align-items: center;
   }
  }

  .extraPadding {
    padding-bottom: 16px;
  }
  .extraExtraPadding {
    padding-bottom: 32px;
  }
`;
