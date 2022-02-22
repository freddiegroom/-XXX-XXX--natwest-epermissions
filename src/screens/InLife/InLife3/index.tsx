import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveCondition } from "../../../ConditionSelector/ConditionSelectorSlice";
import { useEFSContinue } from "../../../hooks/useEFSContinue";
import { usePageDuration } from "../../../hooks/usePageDuration";
import { pickRandomFunc } from "../../5.MarketingPreferences/functions";
import Channel from "../components/Channel";
import {
  ChannelGroup,
  ChannelGroupDivider,
  ChannelGroupWrapper,
} from "../components/Channel/Channel.styles";
import Footer from "../components/Footer";
import { ContentContainer, InLifeText } from "../components/in-life.styles";
import InLifeHeader from "../components/InLifeHeader";
import MarketingPreferencesNav from "../components/MarketingPreferencesNav/Index";
import PaymentSwitch from "../components/PaymentSwitch";
import PhoneWrapper from "../components/PhoneWrapper";
import {
  SubmitButtonStyled,
  SubmitButtonWrapper,
} from "../components/SubmitButton/SubmitButton.styles";
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
} from "../InLifeSlice";

const InLife3 = () => {
  const dispatch = useDispatch();
  const { EFSSubmit } = useEFSContinue();

  const stopPageTiming = usePageDuration("in-life-3");

  dispatch(saveCondition("scenario-3"));
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
          Are you happy for us to send you relevant information about products,
          services and offers by:
        </InLifeText>
        <PaymentSwitch />
        <Channel
          text="Mobile app prompts"
          closedAccordionText="Occasional in-app display messages, incl…"
          openAccordionText="Occasional in-app display messages, including offers from other brands in the NatWest Group and carefully selected third parties. We won’t share your data with anyone for their own 
          marketing purposes."
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

export default InLife3;
