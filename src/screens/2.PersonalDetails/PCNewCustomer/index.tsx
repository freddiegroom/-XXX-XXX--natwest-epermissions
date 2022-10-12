import React, { FC, useState } from "react";
import NextButton from "../../../components/e-permissions/Buttons/NextButton";
import ExperimentContainer from "../../../components/e-permissions/ExperimentContainer";
import WhiteFooter from "../../../components/e-permissions/WhiteFooter";
import Header from "../../../components/e-permissions/Header";
import Title from "../../../components/e-permissions/Selects/Title";
import FirstName from "../../../components/e-permissions/Inputs/FirstName/index";
import MiddleName from "../../../components/e-permissions/Inputs/MiddleName";
import LastName from "../../../components/e-permissions/Inputs/LastName";
import MobileNumber from "../../../components/e-permissions/Inputs/MobileNumber";
import EmailAddress from "../../../components/e-permissions/Inputs/EmailAddress";
import Postcode from "../../../components/e-permissions/Inputs/Postcode";
import Address from "../../../components/e-permissions/Selects/Address";
import AddressDate from "../../../components/e-permissions/MultipleInputs/AddressDate";
import DOB from "../../../components/e-permissions/MultipleInputs/DOB";
import WhiteContentContainer from "../../../components/e-permissions/WhiteContentContainer";
import { RedText } from "../../../components/e-permissions/Text/Text.style";
import CountryNationality from "../../../components/e-permissions/Selects/CountryNationality";
import FakeNextButton from "../../../components/e-permissions/Buttons/FakeNextButton";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { usePageDuration } from "../../../hooks/usePageDuration";

const PCNewCustomer: FC = () => {
  useScrollToTop();

  const stopPageTiming = usePageDuration("personal_details_new_customer");

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
        <p>Let's start by getting a few details about you</p>
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
          addressYYYYClick && (
            <NextButton
              routeAddress={"/AccountDetails"}
              pageTimeFunc={stopPageTiming}
            />
          )}
      </WhiteContentContainer>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default PCNewCustomer;
