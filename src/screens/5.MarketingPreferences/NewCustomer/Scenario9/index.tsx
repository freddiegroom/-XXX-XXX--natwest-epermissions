import React, { FC, useState } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { BoldText, HeadingText } from "../../../../components/Text/Text.style";
import OTEmailChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTEmailChannel";
import OTPostChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTPostChannel";
import OTSocialMediaChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTSocialMediaChannel";
import OTTelephoneChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTelephoneChannel";
import OTTextMessageChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTextMessageChannel";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario9: FC = () => {
  const [textClick, setTextClick] = useState(0);
  const [emailClick, setEmailClick] = useState(0);
  const [telephoneClick, setTelephoneClick] = useState(0);
  const [postClick, setPostClick] = useState(0);
  const [socialMediaClick, setSocialMediaClick] = useState(0);
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <p>
          We’re happy to have you as a NatWest customer. As we get to know you
          better, we may want to recommend other NatWest products and offers
          that may benefit you. We wouldn’t want you to miss out, so please
          select below all of the ways you’re happy for us to stay in touch.
        </p>
        <HeadingText>
          Please tick the boxes if you <BoldText>want</BoldText> to receive
          offers and updates.
        </HeadingText>
        <OTTextMessageChannel state={textClick} setState={setTextClick} />
        <OTEmailChannel state={emailClick} setState={setEmailClick} />
        <OTTelephoneChannel
          state={telephoneClick}
          setState={setTelephoneClick}
        />
        <OTPostChannel state={postClick} setState={setPostClick} />
        <OTSocialMediaChannel
          state={socialMediaClick}
          setState={setSocialMediaClick}
        />
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

export default Scenario9;
