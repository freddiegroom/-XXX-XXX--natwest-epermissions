import React, { FC, useState } from "react";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import NextButton from "../../../../components/Buttons/NextButton/index";
import ContentContainer from "../../../../components/ContentContainer";
import OTTextMessageChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTextMessageChannel";
import OTEmailChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTEmailChannel";
import OTTelephoneChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTelephoneChannel";
import OTPostChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTPostChannel";
import OTSocialMediaChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTSocialMediaChannel";
import { BoldText, HeadingText } from "../../../../components/Text/Text.style";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario3: FC = () => {
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
          We'd like to keep you informed about NatWest products, services and
          offers we think may be helpful to you. We won’t bombard you and we’ll
          never share your details with other NatWest group companies or third
          parties for marketing purposes without your permission.
        </p>
        <HeadingText>
          Please tick the boxes if you <BoldText>don't</BoldText> want to
          receive offers and updates.
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

export default Scenario3;
