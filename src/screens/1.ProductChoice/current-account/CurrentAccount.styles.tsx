import styled from "styled-components";

export const CurrentAccountIntroRow = styled.div`
  display: flex;
`;

export const TextContainerStyle = styled.div`
  padding: 20px 24px 0 24px;
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding-bottom: 18px;
    padding-left: 16px;
  }
  max-width: 900px;
`;

export const CardContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 850px;
  @media only screen and (max-width: 849px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardStyle = styled.div`
// padding: 1em;
@media (min-width: 600px) { 
}
  max-width: 268px;
  p {
    font-size: 14px;
  line-height: 20px;
  padding-bottom; 8px;
  margin: 0;
}
`;

export const ColourBar = styled.div`
  width: 245px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  height: 8px;
  background-color: ${(props) => props.color || "#D8D2E8"};
  margin: 1em 0;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: #42145f;
  margin: 0;
  line-height: 30px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #1d7b8a;
  margin: 0;
  height: 50px;
  max-width: ;
`;

export const CardList = styled.ul`
  margin-right: 0;
  list-style: square;
  li,
  p {
    line-height: 20px;
    font-size: 14px;
    padding-bottom: 8px;
    margin: 0;
    max-width: 242px;
  }
  p {
    max-width: 253px;
  }

  margin: 0;
  padding-inline-start: 1em;
  margin-inline-end: 0 !important;
  margin-inline-start: 0 !important;
  margin-block-end: 0 !important;
  margin-block-start: 0 !important;
`;

export const Content = styled.div`
  padding-bottom: 1em;
  @media (min-width: 600px) {
    height: 280px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    padding-left: 8px;
  }
`;

export const ChooseButton = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  width: 213px;
  height: 50px;
  background-color: #1d7b8a;
  color: #ffffff;
  font-size: 18px;
  align-self: flex-end;
  cursor: pointer;
  // justify-self: flex-end;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  margin-bottom: 32px;
`;
