import styled from "styled-components";

export const OffersAndUpdatesContainer = styled.div`
  display: flex;
  align-items: center;
  color: #666666;
  padding: 1rem 0;
  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

export const OAUBox = styled.button`
  border: 1px solid #c9c6c6;
  width: 32px;
  height: 32px;
  border-radius: 1px;
  margin-right: 16px;
`;

export const OAUBoxTicked = styled.button`
  border: 1px solid #c9c6c6;
  width: 32px;
  height: 32px;
  border-radius: 1px;
  margin-right: 16px;
  background-color: red;
`;
