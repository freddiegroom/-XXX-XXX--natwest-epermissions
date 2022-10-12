import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveCondition } from "ConditionSelector/ConditionSelectorSlice";
import { useEFSContinue } from "hooks/useEFSContinue";
import { usePageDuration } from "hooks/usePageDuration";
import { pickRandomFunc } from "utils/pickRandomFunc";
import Channel from "components/in-life/Channel";
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
} from "redux/InLifeSlice";

const InLife1 = () => {
  const dispatch = useDispatch();
  const { EFSSubmit } = useEFSContinue();

  const stopPageTiming = usePageDuration("in-life-1");

  dispatch(saveCondition("scenario-1"));
  const handleFinishExperiment = (e: any) => {
    e.preventDefault();
    stopPageTiming();
    setTimeout(() => EFSSubmit(), 20);
  };

  let initialMobileAppPrompts = useMemo(() => pickRandomFunc(50), []);
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
          From time to time we'd like to tell you about products and services we
          think you might like.
        </InLifeText>
        <InLifeText>
          We won't bombard you, we'll never share your data with anyone for
          their marketing purposes and we'll still tell you about important
          changes or updates on your account.
        </InLifeText>
        <InLifeText>
          You can choose how you'd like to hear from us using the toggles below:
        </InLifeText>
        <PaymentSwitch />
        <Channel
          text="Mobile app prompts"
          subText="This applies for all of your products"
          state={mobileAppPrompts}
          setState={setMobileAppPrompts}
          tickRedux={tickMobileAppPrompts}
          unTickRedux={unTickMobileAppPrompts}
          switchBox
        />
        <Channel
          text="Text Message"
          state={textMessage}
          setState={setTextMessage}
          tickRedux={tickTextMessage}
          unTickRedux={unTickTextMessage}
          switchBox
        />
        <Channel
          text="Email"
          state={email}
          setState={setEmail}
          tickRedux={tickEmail}
          unTickRedux={unTickEmail}
          switchBox
        />
        <Channel
          text="Post"
          state={post}
          setState={setPost}
          tickRedux={tickPost}
          unTickRedux={unTickPost}
          switchBox
        />
        <Channel
          text="Telephone"
          state={telephone}
          setState={setTelephone}
          tickRedux={tickTelephone}
          unTickRedux={unTickTelephone}
          switchBox
        />
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

export default InLife1;
