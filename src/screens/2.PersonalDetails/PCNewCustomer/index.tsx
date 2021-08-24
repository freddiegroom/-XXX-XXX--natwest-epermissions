import React, { FC, useState } from "react";
import NextButton from "../../../components/Buttons/NextButton";
import ExperimentContainer from "../../../components/ExperimentContainer";
import WhiteFooter from "../../../components/WhiteFooter";
import Header from "../../../components/Header";
import Title from "../../../components/Selects/Title";
import FirstName from "../../../components/Inputs/FirstName/index";
import MiddleName from "../../../components/Inputs/MiddleName";
import LastName from "../../../components/Inputs/LastName";
import MobileNumber from "../../../components/Inputs/MobileNumber";
import EmailAddress from "../../../components/Inputs/EmailAddress";
import Postcode from "../../../components/Inputs/Postcode";
import Address from "../../../components/Selects/Address";
import AddressDate from "../../../components/MultipleInputs/AddressDate";
import DOB from "../../../components/MultipleInputs/DOB";
import WhiteContentContainer from "../../../components/WhiteContentContainer";
import { HeadingText, RedText } from "../../../components/Text/Text.style";
import CountryNationality from "../../../components/Selects/CountryNationality";
import FakeNextButton from "../../../components/Buttons/FakeNextButton";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const PCNewCustomer: FC = () => {
  useScrollToTop();
  const [titleClick, setTitleClick] = useState();
  const [firstNameClick, setFirstNameClick] = useState();
  const [lastNameClick, setLastNameClick] = useState();
  const [dobDDClick, setDobDDClick] = useState();
  const [dobMMClick, setDobMMClick] = useState();
  const [dobYYYYClick, setDobYYYYClick] = useState();
  const [nationalityClick, setNationalityClick] = useState(0);
  const [mobileClick, setMobileClick] = useState();
  const [emailClick, setEmailClick] = useState();
  const [postcodeClick, setPostcodeClick] = useState();
  const [addressClick, setAddressClick] = useState(0);
  const [addressMMClick, setAddressMMClick] = useState();
  const [addressYYYYClick, setAddressYYYYClick] = useState();

  //
  const [fillMessage, setFillMessage] = useState();

  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <WhiteContentContainer>
        <p>Let's start by checking we've got the right info for you.</p>
        {/*  */}
        <HeadingText>Confirm your details</HeadingText>
        {/*  */}
        <Title state={titleClick} setState={setTitleClick} />
        {/*  */}
        <FirstName state={firstNameClick} setState={setFirstNameClick} />
        {/*  */}
        <MiddleName />
        {/*  */}
        <LastName state={lastNameClick} setState={setLastNameClick} />
        {/*  */}
        <DOB
          ddState={dobDDClick}
          setDDState={setDobDDClick}
          mmState={dobMMClick}
          setMMState={setDobMMClick}
          yyyyState={dobYYYYClick}
          setYYYYState={setDobYYYYClick}
        />
        {/*  */}
        <CountryNationality
          state={nationalityClick}
          setState={setNationalityClick}
        />
        {/*  */}
        <MobileNumber state={mobileClick} setState={setMobileClick} />
        {/*  */}
        <EmailAddress state={emailClick} setState={setEmailClick} />
        {/*  */}
        <p>Find your address</p>
        <Postcode state={postcodeClick} setState={setPostcodeClick} />
        <Address state={addressClick} setState={setAddressClick} />
        {/*  */}
        <AddressDate
          mmState={addressMMClick}
          setMMState={setAddressMMClick}
          yyyyState={addressYYYYClick}
          setYYYYState={setAddressYYYYClick}
        />

        {!(
          titleClick === 2 &&
          firstNameClick &&
          lastNameClick &&
          dobDDClick &&
          dobMMClick &&
          dobYYYYClick &&
          nationalityClick === 2 &&
          mobileClick &&
          emailClick &&
          postcodeClick &&
          addressClick === 2 &&
          addressMMClick &&
          addressYYYYClick &&
          lastNameClick &&
          firstNameClick
        ) && (
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
        {titleClick === 2 &&
          firstNameClick &&
          lastNameClick &&
          dobDDClick &&
          dobMMClick &&
          dobYYYYClick &&
          nationalityClick === 2 &&
          mobileClick &&
          emailClick &&
          postcodeClick &&
          addressClick === 2 &&
          addressMMClick &&
          addressYYYYClick && <NextButton routeAddress={"/AccountDetails"} />}
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PCNewCustomer;
