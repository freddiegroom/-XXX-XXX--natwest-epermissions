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
} from "./Scenario8.styles";
import { useDispatch } from "react-redux";
import cupSaucer from "../../../../images/cup-saucer.png";
import { BoldText, HeadingText } from "../../../../components/Text/Text.style";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import TTTextMessageChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import TTEmailChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTTelephoneChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTPostChannel from "../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";

const Scenario8: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-8");

  const [textClick, setTextClick] = useState(0);
  const [emailClick, setEmailClick] = useState(0);
  const [telephoneClick, setTelephoneClick] = useState(0);
  const [postClick, setPostClick] = useState(0);
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
        <HeadingText>
          Please review your existing preferences and choose if you are{" "}
          <BoldText>happy</BoldText> for us to send you information about
          products, services and offers by:
        </HeadingText>
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

export default Scenario8;
