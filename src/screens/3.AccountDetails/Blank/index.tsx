import React, { FC } from "react";
import ExperimentContainer from "../../../components/ExperimentContainer";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Scenario15: FC = () => {
  return (
    <ExperimentContainer>
      <Header>How we'll get in touch </Header>
      <p>
        Never tell anyone your full password or PIN. You’ll need them for Online
        Banking, Telephone Banking and the app.{" "}
      </p>
      <p>Choose your Online Banking PIN</p>
      <p>
        PINs are 4 digits long. They can't be numbers in sequence (like 1234) or
        have numbers that repeat 3 times or more (like 1112).
      </p>
      <p>[INPUT PLACEHOLDER]</p>
      <p>Confirm your PIN</p>
      <p>[INPUT PLACEHOLDER]</p>
      <p>Your Online Banking Password</p>
      <p>
        Passwords must be between 6 and 20 characters and a combination of
        letters and numbers (with no spaces or symbols).{" "}
      </p>
      <p>Choose your Online Banking password</p>
      <p>[INPUT PLACEHOLDER]</p>
      <p>Confirm your password</p>
      <p>[INPUT PLACEHOLDER]</p>

      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario15;
