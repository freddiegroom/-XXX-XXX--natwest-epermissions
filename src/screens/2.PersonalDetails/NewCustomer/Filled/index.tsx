import React, { FC } from "react";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { FormBlank } from "../Blank/NewCustomerBlank.styles";

const NewCustomerFilled: FC = () => {
  return (
    <ExperimentContainer>
      <Header>About you</Header>
      <p>Let's start by getting a few details about you</p>
      <FormBlank>
        <label>
          Title
          <select name="title" id="title">
            <option value="">Please choose an option</option>
            <option value="mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Professor">Professor</option>
          </select>
        </label>
        <label>
          First name
          <input name="firstName" id="firstName" />
        </label>
        <label>
          Middle name(s)
          <br />
          You need to tell us if you've got a middle name. Your name must match
          your ID.
          <input name="middleName" id="middleName" />
        </label>
        <label>
          Last name
          <input name="lastName" id="lastName" />
        </label>
        <p>Date of birth</p>
        <div>
          <div>
            <label>
              DD
              <input name="day" id="day"></input>
            </label>
          </div>
          <div>
            <label>
              MM
              <input name="month" id="month"></input>
            </label>
          </div>
          <div>
            <label>
              YY
              <input name="year" id="year"></input>
            </label>
          </div>
        </div>
      </FormBlank>

      <Footer />
    </ExperimentContainer>
  );
};

export default NewCustomerFilled;
