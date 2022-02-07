import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import {
  BoldText,
  HeadingText,
  SmallPaddingDiv,
} from "../../../../components/Text/Text.style";
import TTEmailChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTSocialMediaChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTSocialMediaChannel";
import TTTelephoneChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "../../../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import cupSaucer from "../../../../images/cup-saucer.png";
import {
  saveEmail,
  savePost,
  saveSocialMedia,
  saveTelephone,
  saveTextMessage,
} from "../../MarketingPreferencesSlice";

const Scenario17: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-17");

  const pickRandomFunc = () => {
    return Math.floor(Math.random() * 2);
  };

  const dispatch = useDispatch();
  let initialTextMessage = useMemo(() => pickRandomFunc(), []);
  let initialEmail = useMemo(() => pickRandomFunc(), []);
  let initialTelephone = useMemo(() => pickRandomFunc(), []);
  let initialPost = useMemo(() => pickRandomFunc(), []);
  let initialSocialMedia = useMemo(() => pickRandomFunc(), []);

  useEffect(() => {
    dispatch(saveTextMessage(initialTextMessage));
    dispatch(saveEmail(initialEmail));
    dispatch(saveTelephone(initialTelephone));
    dispatch(savePost(initialPost));
    dispatch(saveSocialMedia(initialSocialMedia));
  }, [
    dispatch,
    initialEmail,
    initialPost,
    initialSocialMedia,
    initialTelephone,
    initialTextMessage,
  ]);

  const [textClick, setTextClick] = useState(initialTextMessage);
  const [emailClick, setEmailClick] = useState(initialEmail);
  const [telephoneClick, setTelephoneClick] = useState(initialTelephone);
  const [postClick, setPostClick] = useState(initialPost);
  const [socialMediaClick, setSocialMediaClick] = useState(initialSocialMedia);
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
        <SmallPaddingDiv />
        <HeadingText>
          Please review your existing preferences and choose if you are{" "}
          <BoldText>happy</BoldText> for us to contact you by{" "}
        </HeadingText>
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
        <NextButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopPageTiming}
        />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario17;
