import React, { FC } from "react";
// import ChooseButton from "../../../components/Buttons/ChooseButton";
import ExperimentContainer from "../../../components/ExperimentContainer";
import WhiteFooter from "../../../components/WhiteFooter";
import Header from "../../../components/Header";
import {
  CardList,
  CardSubtitle,
  CardTitle,
  CardContainerStyle,
  CardStyle,
  Row,
  ColourBar,
  Content,
  TextContainerStyle,
  ChooseButton,
} from "./CurrentAccount.styles";
import infoIcon from "../../../../images/information-icon.png";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { useHistory } from "react-router-dom";
import { HeadingText, RegularText } from "../../../components/Text/Text.style";
import { selectChoice } from "../productChoiceSlice";
import { useDispatch } from "react-redux";
import creditCard from "../../../../images/credit-card-logo.png";
import { usePageDuration } from "../../../hooks/usePageDuration";

const CurrentAccount: FC = () => {
  useScrollToTop();
  const history = useHistory();
  const dispatch = useDispatch();
  const stopDuration = usePageDuration("product_choice_current_account");

  const handleNextPage = (route: string) => {
    stopDuration();
    history.push(route);
  };

  const nextPageFunc = (product: string) => {
    dispatch(selectChoice(product));
    stopDuration();
    handleNextPage("/PersonalDetails");
  };
  return (
    <ExperimentContainer>
      <Header image={creditCard}>Find the right bank account for you</Header>
      <TextContainerStyle>
        <HeadingText>Switch to NatWest</HeadingText>
        <RegularText>
          The Current Account Switch Service will do all the work when it comes
          to switching, moving everything across from your old account to your
          new account all within 7 working days, including Direct Debits and
          standing orders. All you need to do is tell us the details of your old
          bank account and when you want the Switch to start.
        </RegularText>
      </TextContainerStyle>
      <CardContainerStyle>
        <CardStyle>
          <ColourBar color="#FABB23" />
          <CardTitle>Select Account</CardTitle>
          <CardSubtitle>
            Our most popular account for day-to-day banking, with no monthly fee
          </CardSubtitle>
          <Content>
            <CardList>
              <li>
                Manage your account using our Mobile Banking app. Criteria
                applies.
              </li>
              <li>
                Multiple ways to pay; Apple Pay, Google Pay and Contactless Visa
                Debit Card. Limits apply.
              </li>
              <li>No monthly fee.</li>
            </CardList>
            <Row>
              <img src={infoIcon} alt="info icon" />
              <p>To apply, you need to 18+ and a UK resident.</p>
            </Row>
          </Content>
          <ChooseButton
            onClick={(e) => {
              e.preventDefault();
              nextPageFunc("Select Account");
            }}
          >
            Choose Account
          </ChooseButton>
        </CardStyle>
        <CardStyle>
          <ColourBar color="#009FAC" />
          <CardTitle>Reward</CardTitle>
          <CardSubtitle>Earn monthly rewards</CardSubtitle>
          <Content>
            <p>For £2 a month you'll get:</p>
            <CardList>
              <li>
                £4 a month back in Rewards for 2 or more Direct Debits (at least
                £2 each)
              </li>
              <li>£1 a month back in Rewards with 1 mobile app log in</li>
              <li>
                1% back in Rewards when you spend at our partner retailers:
                Caffe Nero, Europcar and more
              </li>
            </CardList>
            <p>
              To apply, you need to be 18+ and a UK resident. To hold a Reward
              account, you’ll need to pay £1,250 into your eligible NatWest
              account every month
            </p>
          </Content>
          <ChooseButton
            onClick={(e) => {
              e.preventDefault();
              nextPageFunc("Reward");
            }}
          >
            Choose Account
          </ChooseButton>
        </CardStyle>
        <CardStyle>
          <ColourBar color="#E60303" />
          <CardTitle>Student</CardTitle>
          <CardSubtitle>Get uni life off to a great start </CardSubtitle>
          <Content>
            <CardList>
              <li>
                Choose 1 of 3 great offers; a tastecardTM. Amazon Prime
                membership or National Express Coachcard
              </li>
              <li>
                Get an interest free overdraft of up to £2,000 (£500 in the
                first term). £18+, subject to approval.
              </li>
              <li>Use our mobile app to help you bank anytime. anywhere</li>
              <li>
                International students can get the account for a £10 monthly fee
              </li>
              <li>No monthly fee for UK students.</li>
            </CardList>
          </Content>
          <ChooseButton
            onClick={(e) => {
              e.preventDefault();
              nextPageFunc("Student");
            }}
          >
            Choose Account
          </ChooseButton>
        </CardStyle>
      </CardContainerStyle>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default CurrentAccount;
