import React, { FC } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Header from "../../../../components/Header";
import { BoldText, HeadingText } from "../../../../components/Text/Text.style";
import OffersAndUpdates from "../../../../components/TickBoxes/OffersAndUpdates";
import WhiteFooter from "../../../../components/WhiteFooter";
import WhiteContentContainer from "../../../../components/WhiteContentContainer";
import cupSaucer from "../../../../images/cup-saucer.png";

const Scenario2: FC = () => {
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>How we'll get in touch</Header>
      <WhiteContentContainer>
        <HeadingText>Your statements</HeadingText>
        <p>
          We’ve set you up to get your statements online. We’ll send them to
          your NatWest Online Banking once a month, where you can save, print or
          share them. We’ll let you know by email when they’re ready to view.
        </p>
        <HeadingText>Important account info</HeadingText>
        <p>
          We'll either email other important account information directly to
          you, or we'll notify you by email that we've sent it to your NatWest
          Mailbox in Online Banking.
        </p>
        <p>
          We'll try to send you everything digitally, although some things may
          still be posted.
        </p>
        <HeadingText>Alerts about your account</HeadingText>
        <p>
          We’ve registered you for alerts to help put you in control of your
          money and account, wherever you are.
        </p>
        <p>
          We’ll text you if we’ve spotted unusual activities, you’re in an
          unarranged overdraft, if there’s not enough money in your current
          account to make a payment you’ve set up, or when your repayment is due
          if you have a personal loan account with us.
        </p>
        <p>If we can't text in advance, we’ll send one the next day.</p>
        <p>
          You can make changes to how you get these alerts and set up other
          helpful alerts on the ‘Alerts’ page in Online Banking, when your
          account’s up and running. You can also make changes in our mobile app
          (app eligibility applies).
        </p>
        <HeadingText>Offers and updates</HeadingText>
        <p>
          We'd like to share details about NatWest offers that could be
          financially beneficial to you. We'll never share your details with
          third parties for marketing purposes.
        </p>
        <OffersAndUpdates>
          I <BoldText> want </BoldText>to get these offers and updates.
        </OffersAndUpdates>
        <NextButton routeAddress="/PrivacyPermissions" />
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default Scenario2;
