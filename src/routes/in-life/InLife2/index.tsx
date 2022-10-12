import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveCondition } from "../../../ConditionSelector/ConditionSelectorSlice";
import { useEFSContinue } from "../../../hooks/useEFSContinue";
import { usePageDuration } from "../../../hooks/usePageDuration";
import { pickRandomFunc } from "screens/5.MarketingPreferences/functions";
import Channel from "components/in-life/Channel";
import {
  ChannelGroup,
  ChannelGroupDivider,
  ChannelGroupWrapper,
} from "components/in-life/Channel/Channel.styles";
import Footer from "components/in-life/Footer";
import {
  ContentContainer,
  InLifeText,
} from "components/in-life/in-life.styles";
import InLifeHeader from "components/in-life/InLifeHeader";
import MarketingPreferencesNav from "components/in-life/MarketingPreferencesNav/Index";
import PaymentSwitch from "components/in-life/PaymentSwitch";
import PhoneWrapper from "components/in-life/PhoneWrapper";
import {
  SubmitButtonStyled,
  SubmitButtonWrapper,
} from "components/in-life/SubmitButton/SubmitButton.styles";
import PrivacyChannel from "components/in-life/PrivacyChannel/index";
import {
  saveEmail,
  saveMobileAppPrompts,
  savePost,
  saveTelephone,
  saveTextMessage,
  tickEmail,
  tickMobileAppPrompts,
  tickPost,
  tickTelephone,
  tickTextMessage,
  unTickEmail,
  unTickMobileAppPrompts,
  unTickPost,
  unTickTelephone,
  unTickTextMessage,
} from "../../../redux/InLifeSlice";

const InLife2 = () => {
  const dispatch = useDispatch();
  const { EFSSubmit } = useEFSContinue();

  const stopPageTiming = usePageDuration("in-life-2");

  dispatch(saveCondition("scenario-2"));
  const handleFinishExperiment = (e: any) => {
    e.preventDefault();
    stopPageTiming();
    setTimeout(() => EFSSubmit(), 20);
  };

  let initialMobileAppPrompts = useMemo(() => pickRandomFunc(60), []);
  let initialTextMessage = useMemo(() => pickRandomFunc(15), []);
  let initialEmail = useMemo(() => pickRandomFunc(20), []);
  let initialTelephone = useMemo(() => pickRandomFunc(60), []);
  let initialPost = useMemo(() => pickRandomFunc(60), []);

  useEffect(() => {
    dispatch(saveMobileAppPrompts(initialMobileAppPrompts));
    dispatch(saveTextMessage(initialTextMessage));
    dispatch(saveEmail(initialEmail));
    dispatch(saveTelephone(initialTelephone));
    dispatch(savePost(initialPost));
  }, [
    dispatch,
    initialMobileAppPrompts,
    initialEmail,
    initialPost,
    initialTelephone,
    initialTextMessage,
  ]);

  const [mobileAppPrompts, setMobileAppPrompts] = useState(
    initialMobileAppPrompts
  );
  const [textMessage, setTextMessage] = useState(initialTextMessage);
  const [email, setEmail] = useState(initialEmail);
  const [post, setPost] = useState(initialTelephone);
  const [telephone, setTelephone] = useState(initialPost);

  return (
    <PhoneWrapper>
      <InLifeHeader />
      <ContentContainer>
        <MarketingPreferencesNav />
        <InLifeText>
          We'd like to share details about offers that could be financially
          beneficial to you. We'll never share your details with third parties
          for their marketing purposes.
        </InLifeText>
        <PrivacyChannel />
        <PaymentSwitch />
        <InLifeText>
          You can choose how you'd like to hear from us using the toggles below:
        </InLifeText>
        <Channel
          text="Mobile app prompts"
          subText="This applies for all of your products"
          state={mobileAppPrompts}
          setState={setMobileAppPrompts}
          tickRedux={tickMobileAppPrompts}
          unTickRedux={unTickMobileAppPrompts}
        />

        <ChannelGroupWrapper>
          <ChannelGroup>
            <Channel
              text="Email"
              subText="alexsmith@gmail.com"
              state={email}
              setState={setEmail}
              tickRedux={tickEmail}
              unTickRedux={unTickEmail}
              group
            />
            <ChannelGroupDivider />
            <Channel
              text="Text Message"
              subText="0778****234"
              state={textMessage}
              setState={setTextMessage}
              tickRedux={tickTextMessage}
              unTickRedux={unTickTextMessage}
              group
            />
            <ChannelGroupDivider />
            <Channel
              text="Telephone"
              subText="0778****234"
              state={telephone}
              setState={setTelephone}
              tickRedux={tickTelephone}
              unTickRedux={unTickTelephone}
              group
            />
            <ChannelGroupDivider />
            <Channel
              text="Post"
              subText="1 Example Road"
              state={post}
              setState={setPost}
              tickRedux={tickPost}
              unTickRedux={unTickPost}
              group
            />
          </ChannelGroup>
        </ChannelGroupWrapper>
        <SubmitButtonWrapper>
          <SubmitButtonStyled onClick={(e) => handleFinishExperiment(e)}>
            Submit
          </SubmitButtonStyled>
        </SubmitButtonWrapper>
      </ContentContainer>
      <Footer />
    </PhoneWrapper>
  );
};

export default InLife2;
