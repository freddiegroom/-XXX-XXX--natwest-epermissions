import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Header from "../../../../components/Header";
import ChoosePassword from "../../../../components/Inputs/ChoosePassword";
import ConfirmPassword from "../../../../components/Inputs/ConfirmPassword";
import ConfirmPIN from "../../../../components/ConfirmPIN";
import { HeadingText, RedText } from "../../../../components/Text/Text.style";
import WhiteContentContainer from "../../../../components/WhiteContentContainer";
import WhiteFooter from "../../../../components/WhiteFooter";
import FakeNextButton from "../../../../components/Buttons/FakeNextButton";
import PIN from "../../../../components/ConfirmPIN/PIN";
import { usePageDuration } from "../../../../hooks/usePageDuration";

interface AccountDetailsProps {
  debugCondition: number;
}

const AccountDetails: FC<AccountDetailsProps> = ({ debugCondition }) => {
  const stopPageTiming = usePageDuration("account-details");
  const { condition } = useEFSData();
  const routeFunction = () => {
    if (condition) {
      if (condition === 1 || condition === 2) {
        return "/MarketingPreferences";
      } else {
        return "/PermissionsInfo";
      }
    } else {
      if (debugCondition === 1 || debugCondition === 2) {
        return "/MarketingPreferences";
      } else {
        return "/PermissionsInfo";
      }
    }
  };
  let routeyRouteRoute = routeFunction();

  const [pinClick, setPinClick] = useState(false);
  const [choosePasswordClick, setChoosePasswordClick] = useState(false);
  const [confirmPasswordClick, setConfirmPasswordClick] = useState(false);
  const [confirmPin, setConfirmPin] = useState("");
  const [fillMessage, setFillMessage] = useState(false);

  return (
    <ExperimentContainer>
      <Header>Online Banking</Header>
      <WhiteContentContainer>
        <p>
          Never tell anyone your full password or PIN. You’ll need them for
          Online Banking, Telephone Banking and the app.{" "}
        </p>
        <HeadingText>Choose your Online Banking PIN</HeadingText>
        <p>
          PINs are 4 digits long. They can't be numbers in sequence (like 1234)
          or have numbers that repeat 3 times or more (like 1112).
        </p>
        <PIN state={pinClick} setState={setPinClick} />
        <ConfirmPIN state={confirmPin} setState={setConfirmPin} />
        <HeadingText>Your Online Banking Password</HeadingText>
        <p>
          Passwords must be between 6 and 20 characters and a combination of
          letters and numbers (with no spaces or symbols).{" "}
        </p>
        <ChoosePassword
          state={choosePasswordClick}
          setState={setChoosePasswordClick}
        />
        <ConfirmPassword
          state={confirmPasswordClick}
          setState={setConfirmPasswordClick}
        />
        {/* <NextButton routeAddress={routeyRouteRoute} /> */}
        {!(
          pinClick &&
          confirmPin === "5467" &&
          choosePasswordClick &&
          confirmPasswordClick
        ) && (
          <>
            {fillMessage && (
              <RedText>
                Please fill in your online banking details to continue
              </RedText>
            )}
            <FakeNextButton setState={setFillMessage}>
              scroll to top
            </FakeNextButton>
          </>
        )}

        {/* {titleClick && */}
        {pinClick &&
          confirmPin === "5467" &&
          choosePasswordClick &&
          confirmPasswordClick && (
            <NextButton
              routeAddress={routeyRouteRoute}
              pageTimeFunc={stopPageTiming}
            />
          )}
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default AccountDetails;
