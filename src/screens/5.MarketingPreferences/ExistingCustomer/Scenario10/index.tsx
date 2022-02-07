import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import {
  HeadingText,
  SmallPaddingDiv,
} from "../../../../components/Text/Text.style";
import TTEmailChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTTelephoneChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "../../../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import cupSaucer from "../../../../images/cup-saucer.png";
import {
  saveEmail,
  savePost,
  saveTelephone,
  saveTextMessage,
} from "../../MarketingPreferencesSlice";

const Scenario10: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-10");

  const pickRandomFunc = () => {
    return Math.floor(Math.random() * 2);
  };

  const dispatch = useDispatch();
  let initialTextMessage = useMemo(() => pickRandomFunc(), []);
  let initialEmail = useMemo(() => pickRandomFunc(), []);
  let initialTelephone = useMemo(() => pickRandomFunc(), []);
  let initialPost = useMemo(() => pickRandomFunc(), []);

  useEffect(() => {
    dispatch(saveTextMessage(initialTextMessage));
    dispatch(saveEmail(initialEmail));
    dispatch(saveTelephone(initialTelephone));
    dispatch(savePost(initialPost));
  }, [
    dispatch,
    initialEmail,
    initialPost,
    initialTelephone,
    initialTextMessage,
  ]);

  const [textClick, setTextClick] = useState(initialTextMessage);
  const [emailClick, setEmailClick] = useState(initialEmail);
  const [telephoneClick, setTelephoneClick] = useState(initialTelephone);
  const [postClick, setPostClick] = useState(initialPost);
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
        <HeadingText>Are you happy for us to contact you by:</HeadingText>
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
        <NextButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopPageTiming}
        />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario10;
