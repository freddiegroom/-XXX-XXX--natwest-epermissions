import React, { FC, useState } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { BoldText } from "../../../../components/Text/Text.style";
import TTEmailChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTSocialMediaChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTSocialMediaChannel";
import TTTelephoneChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "../../../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario17: FC = () => {
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
        <p>
          Please review your existing preferences and choose if you are{" "}
          <BoldText>happy</BoldText> for us to contact you by{" "}
        </p>
        <DesktopYesNoContainer>
          <p>YES</p>
          <p>NO</p>
        </DesktopYesNoContainer>
        <TTTextMessageChannel state={textClick} setState={setTextClick} />
        <TTEmailChannel state={emailClick} setState={setEmailClick} />
        <TTTelephoneChannel
          state={telephoneClick}
          setState={setTelephoneClick}
        />
        <TTPostChannel state={postClick} setState={setPostClick} />
        <TTSocialMediaChannel
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

export default Scenario17;
