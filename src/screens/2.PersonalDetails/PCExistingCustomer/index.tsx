import React, { FC, useState } from "react";
import ExperimentContainer from "../../../components/ExperimentContainer";
import WhiteFooter from "../../../components/WhiteFooter";
import Header from "../../../components/Header";
import Title from "../../../components/Selects/Title";
import DetailsRadio from "../../../components/RadioButtons/DetailsRadio/index";
import NextButton from "../../../components/Buttons/NextButton";
import WhiteContentContainer from "../../../components/WhiteContentContainer";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { RedText } from "../../../components/Text/Text.style";
import FakeNextButton from "../../../components/Buttons/FakeNextButton";
import { useEFSData } from "@dectech/react-library";

interface PCExistingCustomerProps {
  debugCondition?: number;
}

const PCExistingCustomer: FC<PCExistingCustomerProps> = ({
  debugCondition,
}) => {
  useScrollToTop();
  const [titleClick, setTitleClick] = useState();
  const [detailsClick, setDetailsClick] = useState();
  const [fillMessage, setFillMessage] = useState();
  const { condition } = useEFSData();
  const routeFunction = () => {
    if (condition) {
      if (condition === 15 || condition === 16) {
        return "/MarketingPreferences";
      } else {
        return "/PermissionsInfo";
      }
    } else {
      if (debugCondition === 15 || debugCondition === 16) {
        return "/MarketingPreferences";
      } else {
        return "/PermissionsInfo";
      }
    }
  };
  let routeTootieFlootie = routeFunction();
  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <WhiteContentContainer>
        <p>Let's start by checking we've got the right info for you.</p>
        {/*  */}
        <p>Confirm your details</p>
        {/*  */}
        <Title state={titleClick} setState={setTitleClick} />
        {/*  */}
        <p>Name</p>
        <p>Alex Smith</p>
        {/*  */}
        <p>Mobile number</p>
        <p>0778****234</p>
        {/*  */}
        <p>Email address</p>
        <p>alexsmith@gmail.com</p>
        {/*  */}
        <p>Current address</p>
        <p>1 Example Road</p>
        <p>Edinburgh</p>
        <p>EH1 1HE</p>
        {/*  */}
        <p>Are these details right?</p>
        <DetailsRadio state={detailsClick} setState={setDetailsClick} />

        {!(titleClick === 2) && (
          <>
            {fillMessage && (
              <RedText>
                Please fill in your personal details to continue
              </RedText>
            )}
            <FakeNextButton setState={setFillMessage}>
              scroll to top
            </FakeNextButton>
          </>
        )}

        {/* {titleClick && */}
        {titleClick === 2 && <NextButton routeAddress={routeTootieFlootie} />}
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PCExistingCustomer;
