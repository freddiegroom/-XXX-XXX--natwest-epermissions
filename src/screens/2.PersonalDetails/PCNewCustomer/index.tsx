import React, { FC } from "react";
import NextButton from "../../../components/Buttons/NextButton";
import ExperimentContainer from "../../../components/ExperimentContainer";
import WhiteFooter from "../../../components/WhiteFooter";
import Header from "../../../components/Header";
import Title from "../../../components/Selects/Title";
import FirstName from "../../../components/Inputs/FirstName/index";
import MiddleName from "../../../components/Inputs/MiddleName";
import LastName from "../../../components/Inputs/LastName";
import MobileNumber from "../../../components/Inputs/MobileNumber";
import EmailAddress from "../../../components/Inputs/EmailAddress";
import Postcode from "../../../components/Inputs/Postcode";
import Address from "../../../components/Selects/Address";
import AddressDate from "../../../components/MultipleInputs/AddressDate";
import DOB from "../../../components/MultipleInputs/DOB";
import WhiteContentContainer from "../../../components/WhiteContentContainer";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { useHistory } from "react-router-dom";
import { HeadingText } from "../../../components/Text/Text.style";
import { useEFSData } from "@dectech/react-library";

const PCNewCustomer: FC = () => {
  useScrollToTop();
  const { user = "new" } = useEFSData();
  const history = useHistory();

  const handleNextPage = (route: string) => {
    history.push(route);
  };
  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <WhiteContentContainer>
        <p>Let's start by checking we've got the right info for you.</p>
        {/*  */}
        <HeadingText>Confirm your details</HeadingText>
        {/*  */}
        <Title />
        {/*  */}
        <FirstName />
        {/*  */}
        <MiddleName />
        {/*  */}
        <LastName />
        {/*  */}
        <DOB />
        {/*  */}
        <MobileNumber />
        {/*  */}
        <EmailAddress />
        {/*  */}
        <p>Find your address</p>
        <Postcode />
        <Address />
        {/*  */}
        <AddressDate />
        <NextButton routeAddress={"/AccountDetails"} />
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PCNewCustomer;
