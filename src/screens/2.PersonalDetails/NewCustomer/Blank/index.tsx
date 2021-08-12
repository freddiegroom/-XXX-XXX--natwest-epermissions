import React, { FC } from "react";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

const NewCustomerBlank: FC = () => {
  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <p>Let's start by getting a few details about you</p>
      {/*  */}
      <p>Title</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>First name</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Middle name(s)</p>
      <p>
        You need to tell us if you've got a middle name. Your name must match
        your ID.
      </p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Last name</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Date of birth</p>
      <p>DD / MM / YYYY</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Country of nationality</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/* // */}
      <p>Mobile number</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Email address</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Find your address</p>
      <p>Postcode</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>Email address</p>
      <p>[PLACEHOLDER INPUT]</p>
      {/*  */}
      <p>When did you move into this address?</p>
      <p>MM / YYYY</p>
      <p>[PLACEHOLDER INPUT]</p>

      <Footer />
    </ExperimentContainer>
  );
};

export default NewCustomerBlank;
