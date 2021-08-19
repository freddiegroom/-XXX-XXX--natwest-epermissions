import React, { FC } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import OTEmailChannel from "../../../../components/TickBoxChannels/OneTickChannel/EmailChannel";
import OTPostChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTPostChannel";
import OTSocialMediaChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTSocialMediaChannel";
import OTTelephoneChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTelephoneChannel";
import OTTextMessageChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTextMessageChannel";

const Scenario14: FC = () => {
  return (
    <ExperimentContainer>
      <Header>News and offers</Header>
      <ContentContainer>
        <p>
          We'd like to keep you informed about NatWest products, services and
          offers we think may be helpful to you. We won’t bombard you and we’ll
          never share your details with other NatWest group companies or third
          parties for marketing purposes without your permission.
        </p>
        <p>Please tick the boxes if you want to receive offers and updates.</p>
        <OTTextMessageChannel />
        <OTEmailChannel />
        <OTTelephoneChannel />
        <OTPostChannel />
        <OTSocialMediaChannel />
        <NextButton routeAddress="/PrivacyPermissions" />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario14;
