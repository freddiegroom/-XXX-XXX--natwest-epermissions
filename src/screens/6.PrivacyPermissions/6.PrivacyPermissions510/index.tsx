import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import ContentContainer from "components/e-permissions/ContentContainer";
import ExperimentContainer from "components/e-permissions/ExperimentContainer";
import Footer from "components/e-permissions/Footer";
import Header from "components/e-permissions/Header";
import { HeadingText } from "components/e-permissions/Text/Text.style";
import { useEFSContinue } from "../../../hooks/useEFSContinue";
import { usePageDuration } from "../../../hooks/usePageDuration";
import cupSaucer from "images/cup-saucer.png";
import { PrivacySpan, RegularText, RedText } from "./PrivacyPermissions.styles";
import { clickPrivacyNotice } from "../PrivacyPermissionsSlice";
import bottomBevel from "images/bottom-bevel.png";
import largebottomBevel from "images/large-bottom-bevel.png";
// import largebottomBevel from "images/large-bottom-bevel.png";
import {
  NextButtonContainer,
  NextButtonStyle,
} from "components/e-permissions/Buttons/NextButton/NextButton.style";
import { useHistory } from "react-router-dom";
import { DesktopYesNoContainer } from "components/e-permissions/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import TTOtherNewsChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTOtherNewsChannel";
import TTThirdPartyChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTThirdPartyChannel";
import TTNatwestEmailsChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTNatwestEmailsChannel";
import FakeNextButton from "components/e-permissions/Buttons/FakeNextButton";

interface PrivacyPermissions1Props {
  hideSubText?: boolean;
}

const PrivacyPermissions510: FC<PrivacyPermissions1Props> = ({
  hideSubText,
}) => {
  const { EFSSubmit } = useEFSContinue();
  const stopPageTiming = usePageDuration("privacy_permissions");
  const history = useHistory();

  const dispatch = useDispatch();

  const [otherNewsClick, setOtherNewsClick] = useState(3);
  const [thirdPartyClick, setThirdPartyClick] = useState(3);
  const [natwestEmails, setNatwestEmails] = useState(3);
  const [fillMessage, setFillMessage] = useState("");

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
        <HeadingText>Are you happy for us to contact you about:</HeadingText>
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
        <RegularText>
          You’ll hear directly from us and we won’t share your data with third
          parties for their own marketing.
        </RegularText>
        <HeadingText>How can we use your information?</HeadingText>
        <RegularText>
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
        </RegularText>
        <TTNatwestEmailsChannel
          state={natwestEmails}
          setState={setNatwestEmails}
        />
        {!(
          otherNewsClick !== 3 &&
          thirdPartyClick !== 3 &&
          natwestEmails !== 3
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

        {otherNewsClick !== 3 && thirdPartyClick !== 3 && natwestEmails !== 3 && (
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
        )}
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default PrivacyPermissions510;
