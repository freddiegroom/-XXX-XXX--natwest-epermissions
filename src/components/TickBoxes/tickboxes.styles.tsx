import styled from "styled-components";

export const RadioContainer = styled.div`
display: flex;
align-items: center;
padding-bottom: 24px;
p {
  padding-left: 16px;
  margin: 0;
  color: #666666;
  font-size: 16px;
  line-height: 24px;
}
.subText {
  color: #333333;
  font-size: 14px;asd
  line-height: 16px;
}
cursor: pointer;
@media only screen and (max-width: 600px) {
  padding: 0 16px;
}
`;

export const RedRadioContainer = styled.div`
  display: flex;
  padding-bottom: 24px;
  p {
    margin: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
  }
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const RedRadio = styled.div`
  border: 2px solid #ad1982;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #969c9c;
  cursor: pointer;
  border-radius: 32px;
`;

export const NormalRadio = styled.div`
  border: 2px solid #ad1982;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisabledRadio = styled.div`
  border: 2px solid #c9c6c6;
  background-color: #d8d8d8;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;
  border-radius: 32px;
`;

export const RedCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  background-color: #ad1982;
`;
