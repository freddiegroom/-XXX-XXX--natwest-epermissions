import React, { FC } from "react";
import { useState } from "react";
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
import OTEmailChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTEmailChannel";
import OTPostChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTPostChannel";
import OTSocialMediaChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTSocialMediaChannel";
import OTTelephoneChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTelephoneChannel";
import OTTextMessageChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTextMessageChannel";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import cupSaucer from "../../../../images/cup-saucer.png";

// export const ScenarioContext = React.createContext({
//   email: 0,
//   text: 0,
// });

const Scenario7: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-7");

  const [textClick, setTextClick] = useState(0);
  const [emailClick, setEmailClick] = useState(0);
  const [telephoneClick, setTelephoneClick] = useState(0);
  const [postClick, setPostClick] = useState(0);
  const [socialMediaClick, setSocialMediaClick] = useState(0);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case: 'email':
  //       return {...state, email: action.value}
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, { email: 0})

  return (
    // <ScenarioContext.Provider>
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
          Please tick the boxes if you <BoldText>want</BoldText> to receive
          offers and updates.
        </HeadingText>
        {/* <OTEmailChannel state={state.email} setState={x => dispatch({type: 'email', value: x}) */}
        {/* <OTEmailChannel initialState={0} /> */}
        <OTEmailChannel state={emailClick} setState={setEmailClick} />
        <OTTextMessageChannel state={textClick} setState={setTextClick} />
        <OTPostChannel state={postClick} setState={setPostClick} />
        <OTTelephoneChannel
          state={telephoneClick}
          setState={setTelephoneClick}
        />
        <OTSocialMediaChannel
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
    // </ScenarioContext.Provider>
  );
};

export default Scenario7;
