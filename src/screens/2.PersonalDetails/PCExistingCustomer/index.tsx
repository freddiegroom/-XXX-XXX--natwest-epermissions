import React, { FC, useState } from "react";
import ExperimentContainer from "../../../components/ExperimentContainer";
import WhiteFooter from "../../../components/WhiteFooter";
import Header from "../../../components/Header";
import Title from "../../../components/Selects/Title";
import DetailsRadio from "../../../components/RadioButtons/DetailsRadio/index";
import NextButton from "../../../components/Buttons/NextButton";
import WhiteContentContainer from "../../../components/WhiteContentContainer";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const PCExistingCustomer: FC = () => {
  useScrollToTop();
  const [titleClick, setTitleClick] = useState();

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
        <DetailsRadio />
        <NextButton routeAddress={"/MarketingPreferences"} />
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PCExistingCustomer;
