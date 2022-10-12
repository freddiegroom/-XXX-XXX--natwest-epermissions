import React, { FC } from "react";
import NextButton from "../../components/e-permissions/Buttons/NextButton";
import ExperimentContainer from "../../components/e-permissions/ExperimentContainer";
import Header from "../../components/e-permissions/Header";
import {
  HeadingText,
  SmallPaddingDiv,
} from "../../components/e-permissions/Text/Text.style";
import WhiteContentContainer from "../../components/e-permissions/WhiteContentContainer";
import WhiteFooter from "../../components/e-permissions/WhiteFooter";
import { usePageDuration } from "../../hooks/usePageDuration";
import cupSaucer from "images/cup-saucer.png";

const PermissionsInfo: FC = () => {
  const stopPageTiming = usePageDuration("permissions-info");

  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>How we'll get in touch</Header>
      <WhiteContentContainer>
        <HeadingText>Your statements</HeadingText>
        <SmallPaddingDiv />
        <p>
          We’ve set you up to get your statements online. We’ll send them to
          your NatWest Online Banking once a month, where you can save, print or
          share them. We’ll let you know by email when they’re ready to view.
        </p>
        <SmallPaddingDiv />
        <HeadingText>Important account info</HeadingText>
        <SmallPaddingDiv />
        <p>
          We'll either email other important account information directly to
          you, or we'll notify you by email that we've sent it to your NatWest
          Mailbox in Online Banking.
        </p>
        <SmallPaddingDiv />
        <p>
          We'll try to send you everything digitally, although some things may
          still be posted.
        </p>
        <SmallPaddingDiv />
        <HeadingText>Alerts about your account</HeadingText>
        <SmallPaddingDiv />
        <p>
          We’ve registered you for alerts to help put you in control of your
          money and account, wherever you are.{" "}
        </p>
        <SmallPaddingDiv />
        <p>
          We’ll text you if we’ve spotted unusual activities, you’re in an
          unarranged overdraft, if there’s not enough money in your current
          account to make a payment you’ve set up, or when your repayment is due
          if you have a personal loan account with us.
        </p>
        <SmallPaddingDiv />
        <p>If we can't text in advance, we’ll send one the next day.</p>
        <SmallPaddingDiv />
        <p>
          You can make changes to how you get these alerts and set up other
          helpful alerts on the ‘Alerts’ page in Online Banking, when your
          account’s up and running. You can also make changes in our mobile app
          (app eligibility applies).
        </p>
        <SmallPaddingDiv />
        <NextButton
          routeAddress="/MarketingPreferences"
          pageTimeFunc={stopPageTiming}
        >
          Next
        </NextButton>
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PermissionsInfo;
