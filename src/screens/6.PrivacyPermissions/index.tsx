import React, { FC } from "react";
import NextButton from "../../components/Buttons/NextButton";
import ContentContainer from "../../components/ContentContainer";
import ExperimentContainer from "../../components/ExperimentContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BoldText } from "../../components/Text/Text.style";
import NatwestEmailsChannel from "../../components/TickBoxChannels/NoImageChannel/NatwestEmailsChannel";
import OtherNewsChannel from "../../components/TickBoxChannels/NoImageChannel/OtherNewsChannel";
import ThirdPartyChannel from "../../components/TickBoxChannels/NoImageChannel/ThirdPartyChannel";
import cupSaucer from "../../images/cup-saucer.png";

const PrivacyPermissions: FC = () => {
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <p>
          We’d also like to tell you about valuable news and offers from other
          NatWest group companies and carefully selected third parties. The
          NatWest group includes NatWest Group Plc and its subsidiaries. You’ll
          hear directly from us and we won’t share your data with third parties
          for their own marketing.{" "}
        </p>
        <p>
          Please tick the box if you<BoldText>&nbsp;want&nbsp;</BoldText>
          to hear from us about:
        </p>
        <OtherNewsChannel />
        <ThirdPartyChannel />
        <p>How can we use your information?</p>
        <p>
          We use cookies in emails to help us understand your interests and how
          you interact with our emails. It also helps us to identify delivery
          problems and log when emails are opened. For more information see our
          Privacy Notice.{" "}
        </p>
        <NatwestEmailsChannel />
        <NextButton routeAddress="/" />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default PrivacyPermissions;
