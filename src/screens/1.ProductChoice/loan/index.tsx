import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import ExperimentContainer from "../../../components/e-permissions/ExperimentContainer";
import WhiteFooter from "../../../components/e-permissions/WhiteFooter";
import Header from "../../../components/e-permissions/Header";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import tick from "images/tick.png";

import {
  ColourBar,
  TextContainerStyle,
  Row,
  TickContainer,
  Card,
  PurpleCard,
  CardRow,
  BlueText,
  ChooseButton,
  PaddedCardRow,
} from "./Loan.styles";
import { HeadingText } from "../../../components/e-permissions/Text/Text.style";
import { selectChoice } from "../productChoiceSlice";
import { useDispatch } from "react-redux";
import loan from "images/loan.png";
import { usePageDuration } from "../../../hooks/usePageDuration";

const Loan: FC = () => {
  useScrollToTop();
  const history = useHistory();
  const dispatch = useDispatch();
  const stopPageTiming = usePageDuration("product_choice_loan");

  const handleNextPage = (route: string) => {
    history.push(route);
  };

  const nextPageFunc = (product: string) => {
    dispatch(selectChoice(product));
    stopPageTiming();
    handleNextPage("/PersonalDetails");
  };
  return (
    <ExperimentContainer>
      <Header image={loan}>
        Revamp your space with a home improvement loan
      </Header>
      <TextContainerStyle>
        <HeadingText>Taking out a home improvement loan</HeadingText>
      </TextContainerStyle>
      <Row>
        <TickContainer>
          <img src={tick} alt="" />
          <p>
            If you’re looking to make your DIY plans a reality our home
            improvement loads could help
          </p>
        </TickContainer>
        <TickContainer>
          <img src={tick} alt="" />
          <p>
            You can get a personalised quote at the start of your online
            application and then decide if you want to take out a loan with us
          </p>
        </TickContainer>
        <TickContainer>
          <img src={tick} alt="" />
          <p>
            You could get your loan funds on the same day if you apply online,
            are unconditionally accepted and sign your loan documents before
            5.45pm <BlueText>Mon - Fri.</BlueText> Sometimes we need to contact
            you for more information so it can take a little longer
          </p>
        </TickContainer>
      </Row>
      <Row>
        <Card>
          <ColourBar color="#FABB23" />
          <PurpleCard>
            <CardRow>
              <p>Borrowing</p>
              <p>Over</p>
            </CardRow>
            <PaddedCardRow>
              <h3>£5,000</h3>
              <h3>60 Months</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Monthly repayment</p>
              <p>Total repayment</p>
            </CardRow>
            <PaddedCardRow>
              <h3>£100.50</h3>
              <h3>£6,030.00</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Representative</p>
              <p>Representative</p>
            </CardRow>
            <CardRow>
              <h3>7.9% APR</h3>
              <h3>7.90%p.a.</h3>
            </CardRow>
            <PaddedCardRow>
              <p>(Annual Percentage Rate)</p>
              <p>(fixed)</p>
            </PaddedCardRow>
            <ChooseButton
              onClick={(e) => {
                e.preventDefault();
                nextPageFunc("£5,000");
              }}
            >
              Choose Loan
            </ChooseButton>
          </PurpleCard>
        </Card>
        <Card>
          <ColourBar color="#009FAC" />
          <PurpleCard>
            <CardRow>
              <p>Borrowing</p>
              <p>Over</p>
            </CardRow>
            <PaddedCardRow>
              <h3>10,000</h3>
              <h3>60 Months</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Monthly repayment</p>
              <p>Total repayment</p>
            </CardRow>
            <PaddedCardRow>
              <h3>£181.25</h3>
              <h3>£10,875.00</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Representative</p>
              <p>Representative</p>
            </CardRow>
            <CardRow>
              <h3>3.4% APR</h3>
              <h3>3.40%p.a.</h3>
            </CardRow>
            <PaddedCardRow>
              <p>(Annual Percentage Rate)</p>
              <p>(fixed)</p>
            </PaddedCardRow>
            <ChooseButton
              onClick={(e) => {
                e.preventDefault();
                nextPageFunc("£10,000");
              }}
            >
              Choose Loan
            </ChooseButton>
          </PurpleCard>
        </Card>
        <Card>
          <ColourBar color="#E60303" />
          <PurpleCard>
            <CardRow>
              <p>Borrowing</p>
              <p>Over</p>
            </CardRow>
            <PaddedCardRow>
              <h3>£20,000</h3>
              <h3>60 Months</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Monthly repayment</p>
              <p>Total repayment</p>
            </CardRow>
            <PaddedCardRow>
              <h3>£375.50</h3>
              <h3>£22,530.00</h3>
            </PaddedCardRow>
            <CardRow>
              <p>Representative</p>
              <p>Representative</p>
            </CardRow>
            <CardRow>
              <h3>4.9% APR</h3>
              <h3>4.90%p.a</h3>
            </CardRow>
            <PaddedCardRow>
              <p>(Annual Percentage Rate)</p>
              <p>(fixed)</p>
            </PaddedCardRow>
            <ChooseButton
              onClick={(e) => {
                e.preventDefault();
                nextPageFunc("£20,000");
              }}
            >
              Choose Loan
            </ChooseButton>
          </PurpleCard>
        </Card>
      </Row>
      <WhiteFooter />
    </ExperimentContainer>
  );
};

export default Loan;
