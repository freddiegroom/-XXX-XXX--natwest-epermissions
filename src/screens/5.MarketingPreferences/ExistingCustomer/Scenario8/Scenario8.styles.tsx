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
`;

export const SelectButtonsContainer = styled.div`
  display: flex;
  width: 428px;
  justify-content: space-between;
  padding: 16px 0;
  @media only screen and (max-width: 600px) {
    padding: 0;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    height: 142px;
  }
`;

export const SelectAllButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #42145f;
  border: none;
  color: #fff;
  width: 175px;
  height: 47px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const SelectNoneButton = styled.button`
  font-size: 18px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #f2f2f8;
  color: #42145f;
  width: 173px;
  height: 45px;
  border: 1px solid #42145f;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
