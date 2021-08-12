import React, { FC } from "react";
import ExperimentContainer from "../../components/ExperimentContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PrivacyPermissions: FC = () => {
  return (
    <ExperimentContainer>
      <Header>News and offers</Header>
      <p>
        We’d also like to tell you about valuable news and offers from other
        NatWest group companies and carefully selected third parties. The
        NatWest group includes NatWest Group Plc and its subsidiaries. You’ll
        hear directly from us and we won’t share your data with third parties
        for their own marketing.{" "}
      </p>
      <p>Please tick the box if you want to hear from us about:</p>
      <p>[CHECKBOX] Other NatWest group news and offers</p>
      <p>[CHECKBOX] Third party news and offers</p>
      <p>How can we use your information?</p>
      <p>
        We use cookies in emails to help us understand your interests and how
        you interact with our emails. It also helps us to identify delivery
        problems and log when emails are opened. For more information see our
        Privacy Notice.{" "}
      </p>
      <p>
        [CHECKBOX] Yes, I'm happy for you to analyse my interaction with NatWest
        emails.
      </p>
      <Footer />
    </ExperimentContainer>
  );
};

export default PrivacyPermissions;
