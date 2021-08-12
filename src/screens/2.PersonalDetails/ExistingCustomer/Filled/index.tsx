import React, { FC } from "react";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

const ExistingCustomerFilled: FC = () => {
  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <p>Let's start by checking we've got the right info for you.</p>
      {/*  */}
      <p>Confirm your details</p>
      {/*  */}
      <p>Title</p>
      <p>[PLACEHOLDER INPUT]</p>
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
      <p>[PLACEHOLDER INPUT]</p>
      <p>Yes</p>
      <p>[PLACEHOLDER INPUT]</p>
      <p>No</p>
      <Footer />
    </ExperimentContainer>
  );
};

export default ExistingCustomerFilled;
