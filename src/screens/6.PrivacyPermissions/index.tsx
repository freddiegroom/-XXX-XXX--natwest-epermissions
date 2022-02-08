import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import ContentContainer from "../../components/ContentContainer";
import ExperimentContainer from "../../components/ExperimentContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BoldText, HeadingText } from "../../components/Text/Text.style";
import NatwestEmailsChannel from "../../components/TickBoxChannels/NoImageChannel/NatwestEmailsChannel";
import { useEFSContinue } from "../../hooks/useEFSContinue";
import { usePageDuration } from "../../hooks/usePageDuration";
import cupSaucer from "../../images/cup-saucer.png";
import { PrivacySpan } from "./PrivacyPermissions.styles";
import { clickPrivacyNotice } from "./PrivacyPermissionsSlice";
import bottomBevel from "../../images/bottom-bevel.png";
import largebottomBevel from "../../images/large-bottom-bevel.png";
import {
  NextButtonContainer,
  NextButtonStyle,
} from "../../components/Buttons/NextButton/NextButton.style";
import { useHistory } from "react-router-dom";
import { DesktopYesNoContainer } from "../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import TTOtherNewsChannel from "../../components/TickBoxChannels/TwoTickChannel/TTOtherNewsChannel";
import TTThirdPartyChannel from "../../components/TickBoxChannels/TwoTickChannel/TTThirdPartyChannel";
import TTNatwestEmailsChannel from "../../components/TickBoxChannels/TwoTickChannel/TTNatwestEmailsChannel";

interface PrivacyPermissionsProps {
  hideSubText?: boolean;
}

const PrivacyPermissions: FC<PrivacyPermissionsProps> = ({ hideSubText }) => {
  const { EFSSubmit } = useEFSContinue();
  const stopPageTiming = usePageDuration("privacy_permissions");
  const history = useHistory();

  const dispatch = useDispatch();

  const [otherNewsClick, setOtherNewsClick] = useState(0);
  const [thirdPartyClick, setThirdPartyClick] = useState(0);
  const [natwestEmails, setNatwestEmails] = useState(0);

  const handleNextPage = (route: string) => {
    history.push(route);
  };

  const handleFinishExperiment = (e: any) => {
    e.preventDefault();
    stopPageTiming();
    setTimeout(() => EFSSubmit(), 20);
  };

  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <p>
          We’d also like to tell you about valuable news and offers from other
          NatWest group companies and carefully selected third parties. The
          NatWest group includes NatWest Group Plc and its subsidiaries. You’ll
          hear directly from us and we won’t share your data with third parties
          for their own marketing.{" "}
        </p>
        <HeadingText>
          Please tick the box if you<BoldText>&nbsp;want&nbsp;</BoldText>
          to hear from us about:
        </HeadingText>
        <DesktopYesNoContainer>
          <p>YES</p>
          <p>NO</p>
        </DesktopYesNoContainer>
        <TTOtherNewsChannel
          state={otherNewsClick}
          setState={setOtherNewsClick}
          hideSubText={hideSubText}
        />
        <TTThirdPartyChannel
          state={thirdPartyClick}
          setState={setThirdPartyClick}
          hideSubText={hideSubText}
        />
        <HeadingText>How can we use your information?</HeadingText>
        <p>
          We use cookies in emails to help us understand your interests and how
          you interact with our emails. It also helps us to identify delivery
          problems and log when emails are opened. For more information see
          our&nbsp;
          <PrivacySpan
            onClick={(e) => {
              e.preventDefault();
              dispatch(clickPrivacyNotice());
              handleNextPage("/PrivacyPopUp");
            }}
          >
            Privacy Notice.
          </PrivacySpan>{" "}
        </p>
        <TTNatwestEmailsChannel
          state={natwestEmails}
          setState={setNatwestEmails}
        />
        <NextButtonContainer>
          <NextButtonStyle
            onClick={(e) => {
              handleFinishExperiment(e);
            }}
          >
            Next
          </NextButtonStyle>
          <img className="smallBevel" src={bottomBevel} alt="" />
          <img className="largeBevel" src={largebottomBevel} alt="" />
        </NextButtonContainer>
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default PrivacyPermissions;
