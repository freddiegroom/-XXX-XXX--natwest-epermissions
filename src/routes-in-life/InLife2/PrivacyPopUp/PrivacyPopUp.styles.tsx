import styled from "styled-components";

export const SectionHeading = styled.p`
  color: #42145f;
  font-size: 34px;
  font-family: RNHouseSans-regular !important;
  padding: 16px !important;
  @media only screen and (max-width: 600px) {
    padding: 16px !important;
  }
`;

export const SquareList = styled.ul`
  list-style: none;
`;

export const SquareBullet = styled.li`
  &:before {
    content: "\\25AA";
    color: #42145f;
    font-weight: bold;
    display: inline-block;
    width: 1.5em;
    margin-left: -1.5em;
  }
  //   margin-left: 1em;
  padding: 0.25em 16px 0.25em 0;
`;

export const ListP = styled.p`
  // margin: 0;
  padding: 0.25em 16px 0.25em 0 !important;
  // margin-left: 1.5em;
  // padding-right: 16px;
`;

export const PrivacyP = styled.p`
  padding: 0 16px !important;
`;
