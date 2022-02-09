import React, { FC, useState } from "react";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import NextButton from "../../../../components/Buttons/NextButton/index";
import ContentContainer from "../../../../components/ContentContainer";

import {
  selectAll,
  selectNone,
  tickEmail,
  tickPost,
  tickTelephone,
  tickTextMessage,
  unTickEmail,
  unTickPost,
  unTickTelephone,
  unTickTextMessage,
} from "../../MarketingPreferencesSlice";
import {
  SelectAllButton,
  SelectButtonsContainer,
  SelectNoneButton,
} from "./Scenario3.styles";
import { useDispatch } from "react-redux";
import cupSaucer from "../../../../images/cup-saucer.png";
import {
  BoldText,
  HeadingText,
  SmallPaddingDiv,
} from "../../../../components/Text/Text.style";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import TTTextMessageChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import TTEmailChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTTelephoneChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTPostChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";
import { DesktopYesNoContainer } from "../../../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";

const Scenario3: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-3");

  const [textClick, setTextClick] = useState(3);
  const [emailClick, setEmailClick] = useState(3);
  const [telephoneClick, setTelephoneClick] = useState(3);
  const [postClick, setPostClick] = useState(3);
  const dispatch = useDispatch();

  const selectAllFunction = () => {
    setTextClick(1);
    dispatch(tickTextMessage());
    setEmailClick(1);
    dispatch(tickEmail());
    setTelephoneClick(1);
    dispatch(tickTelephone());
    setPostClick(1);
    dispatch(tickPost());
  };
  const selectNoneFunction = () => {
    setTextClick(0);
    dispatch(unTickTextMessage());
    setEmailClick(0);
    dispatch(unTickEmail());
    setTelephoneClick(0);
    dispatch(unTickTelephone());
    setPostClick(0);
    dispatch(unTickPost());
  };

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
        <SelectButtonsContainer>
          <SelectAllButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(selectAll());
              selectAllFunction();
            }}
          >
            <BoldText>Select All</BoldText>
          </SelectAllButton>{" "}
          <SelectNoneButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(selectNone());
              selectNoneFunction();
            }}
          >
            <BoldText>Select None</BoldText>
          </SelectNoneButton>
        </SelectButtonsContainer>
        <NextButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopPageTiming}
        />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario3;
