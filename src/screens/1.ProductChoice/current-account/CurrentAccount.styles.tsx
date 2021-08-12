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
  }
`;

export const CardContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div`
padding: 1em;
@media (min-width: 450px) { 
  width: 268px;
}
  p {font-size: 14px;
  line-height: 20px;
  padding-bottom; 8px;
  margin: 0;
}
`;

export const ColourBar = styled.div`
  width: 245px;
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
  padding-bottom: 10x;
  color: #1d7b8a;
  margin: 0;
  height: 50px;
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
    width: 100%;
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
