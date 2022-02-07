import React, { FC, useState } from "react";
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
import OTTextMessageChannel from "../../../../components/TickBoxChannels/OneTickChannel/OTTextMessageChannel";
import { usePageDuration } from "../../../../hooks/usePageDuration";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario14: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-14");

  const [textClick, setTextClick] = useState(1);
  const [emailClick, setEmailClick] = useState(1);

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
        <HeadingText>
          Please <BoldText>untick</BoldText> the boxes if you{" "}
          <BoldText>don't</BoldText> want to receive offers and updates.
        </HeadingText>
        <OTTextMessageChannel state={textClick} setState={setTextClick} />
        <OTEmailChannel state={emailClick} setState={setEmailClick} />
        <NextButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopPageTiming}
        />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario14;
