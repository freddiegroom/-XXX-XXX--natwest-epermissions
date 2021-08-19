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

const Scenario17: FC = () => {
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
        <p>
          Please review your existing preferences and choose if you are happy
          for us to contact you by{" "}
        </p>
        <OTTextMessageChannel />
        <OTEmailChannel />
        <OTTelephoneChannel />
        <OTPostChannel />
        <OTSocialMediaChannel />
        <p>
          *We use data to match you with your social media profile so we can
          display relevant offers to you on your social media pages. Note, you
          may still see ads on your social media feed if you have accepted
          targeting cookies through your browser.
        </p>
        <NextButton routeAddress="/PrivacyPermissions" />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario17;
