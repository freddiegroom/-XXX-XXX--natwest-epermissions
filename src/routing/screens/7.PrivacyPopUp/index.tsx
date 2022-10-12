import React from "react";

import { usePageDuration } from "../../../hooks/usePageDuration";
import ExperimentContainer from "../../../components/ExperimentContainer/index";
import Header from "../../../components/Header";
import BackButton from "../../../components/Buttons/BackButton";
import ContentContainer from "../../../components/ContentContainer";
import {
  ListP,
  SectionHeading,
  SquareBullet,
  SquareList,
} from "./PrivacyPopUp.styles";

const PrivacyPopUp = () => {
  const stopDuration = usePageDuration("privacy_pop_up");

  return (
    <ExperimentContainer>
      <Header>Privacy Permissions</Header>
      <ContentContainer>
        <BackButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopDuration}
        />
        <div>
          <SectionHeading>Intro</SectionHeading>
          <p>
            Intro National Westminster Bank plc is responsible for protecting
            your personal info as carefully as we protect your money.
          </p>
          <p>
            This summary explains how we collect and use your personal info to
            help you and our business. We suggest downloading this page.
          </p>
        </div>
        <div>
          <SectionHeading>
            How we get your info and what we use it for
          </SectionHeading>
          <p>
            Your info helps protect you and us from fraud. It also helps us
            check it’s really you. We may also ask you to consider using other
            identification methods like biometrics (your fingerprint or voice).
          </p>
          <p>We collect your info in different ways, like:</p>
          <SquareList>
            <SquareBullet>
              Collecting basic info such as name, address and phone number from
              your application
            </SquareBullet>
            <SquareBullet>
              When you bank with us online or using the NatWest app
            </SquareBullet>
            <SquareBullet>
              From third party companies (such as other NatWest Group companies,
              credit reference agencies or public sources)
            </SquareBullet>
          </SquareList>
          <p>We use your info in different ways, like:</p>
          <SquareList>
            <SquareBullet>
              Using your health info to help you access our services more
              easily, like sending statements in braille if you need it
            </SquareBullet>
            <SquareBullet>
              Offering you the right products and services – your info also
              helps us improve how we serve you
            </SquareBullet>
            <SquareBullet>
              Sharing info about criminal activity with other organisations to
              stop and detect crime, and to obey laws relating to money
              laundering, fraud, and terrorist financing
            </SquareBullet>
            <SquareBullet>
              Helping make the bank run smoothly. Thank you.
            </SquareBullet>
          </SquareList>
        </div>
        <div>
          <SectionHeading>Why do you share my info?</SectionHeading>
          <p>We share your info so we can:</p>
          <SquareList>
            <SquareBullet>Protect you</SquareBullet>
            <SquareBullet>Check your identity</SquareBullet>
            <SquareBullet>
              Make sure you have the right products for your needs
            </SquareBullet>
            <SquareBullet>Prevent fraud and money laundering</SquareBullet>
            <SquareBullet>
              Help us comply with laws, manage our risk and protect our business
            </SquareBullet>
          </SquareList>
        </div>
        <div>
          <SectionHeading>Who do you share it with?</SectionHeading>
          <p>We share your info with:</p>
          <SquareList>
            <SquareBullet>
              Other companies in our group and our business partners who provide
              some of our services
            </SquareBullet>
            <SquareBullet>Credit reference agencies, so we can:</SquareBullet>
            <ListP>
              {" "}
              – Do a credit check – this can affect your credit score (we don’t
              do one if you’re just opening a savings account)
            </ListP>
            <ListP>
              – Do an identity check – this could be done on you and anyone else
              who’s linked to the account, but it doesn’t affect your credit
              score
            </ListP>
            <ListP>
              – Protect you and comply with laws – we must share info with other
              organisations in certain situations, about how you manage your
              account
            </ListP>
            <SquareBullet>
              Fraud prevention agencies, so we can also record any identified or
              suspected fraud, which could mean we, or others, may refuse to
              provide you with services, financing, or employment.
            </SquareBullet>
            <SquareBullet>
              Industry regulators, government departments and similar
              organisations, like HM Revenue and Customs, who might in turn have
              to share it with other countries.
            </SquareBullet>
          </SquareList>
        </div>
        <div>
          <SectionHeading>Your rights</SectionHeading>
          <p>
            We need your info to provide you with the right products and
            services for you, but you have clear rights over what we do with
            that info. They’re not all included here but you’re able to:
          </p>
          <SquareList>
            <SquareBullet>Get a copy of your personal info</SquareBullet>
            <SquareBullet>Ask us to correct or update wrong info</SquareBullet>
            <SquareBullet>
              Ask us to stop using your info in some cases
            </SquareBullet>
            <SquareBullet>
              Ask for a review of a decision that has been made automatically,
              like if a loan has been refused
            </SquareBullet>
            <SquareBullet>
              Stop marketing that uses your personal info
            </SquareBullet>
            <SquareBullet>
              Make a complaint to us about how we’ve used your personal info and
              then to the Information Commissioners office (ICO) if you’re still
              not happy
            </SquareBullet>
          </SquareList>
        </div>
        <div>
          <SectionHeading>How long do you keep my info?</SectionHeading>
          <p>
            We don’t keep your info for longer than we need to, which is usually
            up to ten years after you close all your accounts.
          </p>
          <p>
            Sometimes we need to keep it longer (for example due to an
            investigation by the police).
          </p>
        </div>
        <BackButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopDuration}
        />
      </ContentContainer>
    </ExperimentContainer>
  );
};

export default PrivacyPopUp;
