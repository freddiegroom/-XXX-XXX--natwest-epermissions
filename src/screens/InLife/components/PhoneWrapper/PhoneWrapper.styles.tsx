import styled from "styled-components";

export const PhoneWrapperStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 449px) {
    display: none;
  }
`;
export const PhoneBorder = styled.div`
  width: 400px;
  //   height: 865;
  border-radius: 32px;
  border: 5px solid black;
 overflow: hidden;
  //   overflow-y: scroll;
  //    {
  //     -ms-overflow-style: none; /* Internet Explorer 10+ */
  //     scrollbar-width: none; /* Firefox */
  //   }
  //   ::-webkit-scrollbar {
  //     display: none; /* Safari and Chrome */
  //   }
}
`;

export const PhoneHeader = styled.div``;

export const DesktopWrapperStyle = styled.div`
  @media screen and (min-width: 450px) {
    display: none;
  }
`;
