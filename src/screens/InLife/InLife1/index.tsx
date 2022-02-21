import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useEFSContinue } from "../../../hooks/useEFSContinue";
import { usePageDuration } from "../../../hooks/usePageDuration";
import { pickRandomFunc } from "../../5.MarketingPreferences/functions";
import Channel from "../components/Channel";
import Footer from "../components/Footer";
import { ContentContainer, InLifeText } from "../components/in-life.styles";
import InLifeHeader from "../components/InLifeHeader";
import MarketingPreferencesNav from "../components/MarketingPreferencesNav/Index";
import PaymentSwitch from "../components/PaymentSwitch";
import PhoneWrapper from "../components/PhoneWrapper";
import SubmitButton from "../components/SubmitButton";
import {
  saveEmail,
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
} from "../InLifeSlice";

const InLife1 = () => {
  const dispatch = useDispatch();
  const { EFSSubmit } = useEFSContinue();

  const stopPageTiming = usePageDuration("marketing-preferences-6");

  const handleFinishExperiment = (e: any) => {
    e.preventDefault();
    stopPageTiming();
    setTimeout(() => EFSSubmit(), 20);
  };

  let initialMobileAppPrompts = useMemo(() => pickRandomFunc(15), []);
  let initialTextMessage = useMemo(() => pickRandomFunc(15), []);
  let initialEmail = useMemo(() => pickRandomFunc(20), []);
  let initialTelephone = useMemo(() => pickRandomFunc(60), []);
  let initialPost = useMemo(() => pickRandomFunc(60), []);

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
        />
        <Channel
          text="Text Message"
          state={textMessage}
          setState={setTextMessage}
          tickRedux={tickTextMessage}
          unTickRedux={unTickTextMessage}
        />
        <Channel
          text="Email"
          state={email}
          setState={setEmail}
          tickRedux={tickEmail}
          unTickRedux={unTickEmail}
        />
        <Channel
          text="Post"
          state={post}
          setState={setPost}
          tickRedux={tickPost}
          unTickRedux={unTickPost}
        />
        <Channel
          text="Telephone"
          state={telephone}
          setState={setTelephone}
          tickRedux={tickTelephone}
          unTickRedux={unTickTelephone}
        />
        <SubmitButton finishExperiment={handleFinishExperiment} />
        {/* {!(
          textClick !== 3 &&
          emailClick !== 3 &&
          telephoneClick !== 3 &&
          postClick !== 3
        ) && (
          <>
            {fillMessage && (
              <RedText>Please make your choices to continue</RedText>
            )}
            <FakeNextButton setState={setFillMessage}>
              scroll to top
            </FakeNextButton>
          </>
        )}

        {textClick !== 3 &&
          emailClick !== 3 &&
          telephoneClick !== 3 &&
          postClick !== 3 && (
            <NextButton
              routeAddress={"/PrivacyPermissions"}
              pageTimeFunc={stopPageTiming}
            />
          )} */}
      </ContentContainer>
      <Footer />
    </PhoneWrapper>
  );
};

export default InLife1;
