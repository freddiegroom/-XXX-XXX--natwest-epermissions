import styled from "styled-components";

export const FormBlank = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
  }
  select,
  input {
    margin: 0;
    margin-bottom: 1rem;
    max-width: 293px;
    padding: 0;
    height: 44px;
    border-width: 1px;
    border-style: inset;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    border-color: #969c9c;
  }
  @media only screen and (max-width: 899px) {
    width: 100%;
    // padding: 0 16px;
  }
`;
