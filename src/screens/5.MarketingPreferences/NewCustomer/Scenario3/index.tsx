import React, { FC, useState } from "react";
import ExperimentContainer from "../../../../components/e-permissions/ExperimentContainer";
import Footer from "../../../../components/e-permissions/Footer";
import Header from "../../../../components/e-permissions/Header";
import NextButton from "../../../../components/e-permissions/Buttons/NextButton/index";
import ContentContainer from "../../../../components/e-permissions/ContentContainer";

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
} from "../../../../components/e-permissions/Text/Text.style";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import TTTextMessageChannel from "../../../../components/e-permissions/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import TTEmailChannel from "../../../../components/e-permissions/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTTelephoneChannel from "../../../../components/e-permissions/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTPostChannel from "../../../../components/e-permissions/TickBoxChannels/TwoTickChannel/TTPostChannel";
import { DesktopYesNoContainer } from "../../../../components/e-permissions/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";

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
