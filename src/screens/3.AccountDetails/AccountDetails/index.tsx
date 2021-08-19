import React, { FC } from "react";
import NextButton from "../../../components/Buttons/NextButton";
import ContentContainer from "../../../components/ContentContainer";
import ExperimentContainer from "../../../components/ExperimentContainer";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ChoosePassword from "../../../components/Inputs/ChoosePassword";
import ConfirmPassword from "../../../components/Inputs/ConfirmPassword";
import ConfirmPIN from "../../../components/Inputs/ConfirmPIN";
import PIN from "../../../components/Inputs/PIN";

const AccountDetails: FC = () => {
  return (
    <ExperimentContainer>
      <Header>Online Banking</Header>
      <ContentContainer>
        <p>
          Never tell anyone your full password or PIN. You’ll need them for
          Online Banking, Telephone Banking and the app.{" "}
        </p>
        <p>Choose your Online Banking PIN</p>
        <p>
          PINs are 4 digits long. They can't be numbers in sequence (like 1234)
          or have numbers that repeat 3 times or more (like 1112).
        </p>
        <PIN />
        <ConfirmPIN />
        <p>Your Online Banking Password</p>
        <p>
          Passwords must be between 6 and 20 characters and a combination of
          letters and numbers (with no spaces or symbols).{" "}
        </p>
        <ChoosePassword />
        <ConfirmPassword />
        <NextButton routeAddress="/PermissionsInfo" />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default AccountDetails;
