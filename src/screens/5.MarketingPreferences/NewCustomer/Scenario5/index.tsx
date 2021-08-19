import React, { FC } from "react";
import NextButton from "../../../../components/Buttons/NextButton";
import ContentContainer from "../../../../components/ContentContainer";
import ExperimentContainer from "../../../../components/ExperimentContainer";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

const Scenario5: FC = () => {
  return (
    <ExperimentContainer>
      <Header>News and offers</Header>
      <ContentContainer>
        <p>
          We'd like to keep you informed about NatWest products, services and
          offers we think may be helpful to you. We won’t bombard you and we’ll
          never share your details with other NatWest group companies or third
          parties for marketing purposes without your permission.
        </p>
        <p>Are you happy for us to contact you by:</p>
        <p>[PLACEHOLDER TICKBOX BOX]</p>
        <p>[PLACEHOLDER TICKBOX BOX]</p>
        <p>[PLACEHOLDER TICKBOX BOX]</p>
        <p>[PLACEHOLDER TICKBOX BOX]</p>
        <p>[PLACEHOLDER TICKBOX BOX]</p>
        <p>
          *We use data to match you with your social media profile so we can
          display relevant offers to you on your social media pages. Note, you
          may still see ads on your social media feed if you have accepted
          targeting cookies through your browser.
        </p>
        <NextButton routeAddress="/PrivacyPermissions" />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario5;
