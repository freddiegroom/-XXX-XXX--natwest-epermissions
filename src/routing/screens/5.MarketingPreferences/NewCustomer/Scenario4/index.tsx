import React, { FC, useState } from "react";
import FakeNextButton from "../../../../../components/Buttons/FakeNextButton";
import NextButton from "../../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../../components/ContentContainer";
import ExperimentContainer from "../../../../../components/ExperimentContainer";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import {
  HeadingText,
  RedText,
} from "../../../../../components/Text/Text.style";
import TTEmailChannel from "../../../../../components/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "../../../../../components/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTTelephoneChannel from "../../../../../components/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "../../../../../components/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "../../../../../components/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import { usePageDuration } from "../../../../../hooks/usePageDuration";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario4: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-4");

  const [textClick, setTextClick] = useState(3);
  const [emailClick, setEmailClick] = useState(3);
  const [telephoneClick, setTelephoneClick] = useState(3);
  const [postClick, setPostClick] = useState(3);
  const [fillMessage, setFillMessage] = useState("");
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <HeadingText>
          Are you happy for us to send you information about products, services
          and offers by:
        </HeadingText>
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

        {!(
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
          )}
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario4;
