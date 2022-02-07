import styled from "styled-components";

export const SectionHeading = styled.p`
  color: #42145f;
  font-size: 34px;
  font-family: RNHouseSans-regular !important;
`;

export const SquareList = styled.ul`
  list-style: none;
`;

export const SquareBullet = styled.li`
  &:before {
    content: "\\25AA"; /* Add content: \\2022 is the CSS Code/unicode for a bullet */
    color: #42145f; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`;
