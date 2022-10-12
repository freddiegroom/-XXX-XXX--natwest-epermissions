import React from "react";

import { usePageDuration } from "hooks/usePageDuration";
import ExperimentContainer from "components/e-permissions/ExperimentContainer/index";
import BackButton from "components/e-permissions/Buttons/BackButton";
import BeigeContentContainer from "components/e-permissions/BeigeContentContainer";
import BlankContentContainer from "components/e-permissions/BlankContentContainer";
import {
  AboutUsRow,
  AboutUsColumn,
  AboutUsImage,
  AboutUsHeading,
  AboutUsText,
} from "./AboutUsPopUp.styles";
import NWGroup from "./images/natwest-group-logo-singl-article.png";
import Natwest from "./images/natwest.png";
import RBS from "./images/rbs.png";
import Ulsterbank from "./images/ulsterbank.png";
import Coutts from "./images/coutts.png";
import ChildAndCo from "./images/child-and-co.png";
import Drummonds from "./images/drummonds.png";
import Holts from "./images/holts-military-banking.png";
import IOM from "./images/isle-of-man-bank.png";
import Lombard from "./images/lombard.png";
import NatWest from "./images/nat-west.png";
import RBSInternational from "./images/rbs-internatinal.png";
import FreeAgent from "./images/freeagent-logo.jpg";

const AboutUsPopUp = () => {
  const stopDuration = usePageDuration("privacy_pop_up");

  return (
    <ExperimentContainer>
      <BlankContentContainer>
        <BackButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopDuration}
        />
        <AboutUsRow>
          <AboutUsColumn>
            <AboutUsHeading>Our brands</AboutUsHeading>
            <AboutUsText>
              We champion potential and seek to create a better future. As a UK
              banking and financial services company, we’ve evolved to meet the
              needs of large companies, as well as small businesses and
              individuals. Check out the wide range of products and services
              available from our brilliant brands.
            </AboutUsText>
          </AboutUsColumn>
          <AboutUsImage src={NWGroup} />
        </AboutUsRow>
      </BlankContentContainer>
      <BeigeContentContainer>
        <AboutUsRow>
          <AboutUsImage src={Natwest} />
          <AboutUsColumn>
            <AboutUsHeading>NatWest</AboutUsHeading>
            <AboutUsText>
              At NatWest, tomorrow begins today. NatWest serves customers in
              England and Wales supporting them with their personal, private and
              business banking needs, and supports large corporates in Western
              Europe.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={RBS} />
          <AboutUsColumn>
            <AboutUsHeading>Royal Bank of Scotland</AboutUsHeading>
            <AboutUsText>
              We are the Royal Bank for Scotland – established in Edinburgh in
              1727. In the three centuries that followed it played an
              instrumental role in supporting Scotland’s economic and industrial
              development.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={Ulsterbank} />
          <AboutUsColumn>
            <AboutUsHeading>Ulster Bank</AboutUsHeading>
            <AboutUsText>
              Help for What Matters – Ulster Bank operates both in the Republic
              of Ireland and Northern Ireland helping personal, small business,
              private and commercial customers with their banking needs.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={Coutts} />
          <AboutUsColumn>
            <AboutUsHeading>Coutts</AboutUsHeading>
            <AboutUsText>
              Indispensable Private Banking – Coutts has a world-renowned
              reputation for a personal approach to private banking and wealth
              management. For over three centuries, they have perfected
              exceptional service.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={ChildAndCo} />
          <AboutUsColumn>
            <AboutUsHeading>Child & Co.</AboutUsHeading>
            <AboutUsText>
              One of the oldest private banks in the UK. Child & Co. provides
              personal, private and business banking services to clients in the
              UK, including many of the UK’s biggest law and accountancy firms.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={Drummonds} />
          <AboutUsColumn>
            <AboutUsHeading>Drummonds</AboutUsHeading>
            <AboutUsText>
              Serving private banking customers for over 300 years. Drummonds is
              one of Britain’s oldest private banks, providing personal, private
              and business banking services to clients in the UK.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={Holts} />
          <AboutUsColumn>
            <AboutUsHeading>Holt’s Military Banking</AboutUsHeading>
            <AboutUsText>
              The bank of the British Armed Forces. Holt’s Military Banking is
              designed around your life. With a history of service stretching
              back to 1809.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={IOM} />
          <AboutUsColumn>
            <AboutUsHeading>Isle of Man Bank</AboutUsHeading>
            <AboutUsText>
              Located in Isle of Man – our extensive personal banking products
              include bank accounts, savings accounts mortgages and more.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={Lombard} />
          <AboutUsColumn>
            <AboutUsHeading>Lombard</AboutUsHeading>
            <AboutUsText>
              The UK’s largest provider of asset finance. Asset finance could
              help your business acquire essential technology and equipment
              without disrupting your cash flow.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={RBSInternational} />
          <AboutUsColumn>
            <AboutUsHeading>RBS International</AboutUsHeading>
            <AboutUsText>
              One of the world’s leading offshore banks. Whether you’re a local
              company or international organisation with offshore banking or
              finance requirements, we can help you achieve your financial
              ambitions.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={NatWest} />
          <AboutUsColumn>
            <AboutUsHeading>NatWest Markets</AboutUsHeading>
            <AboutUsText>
              Serving our corporate and institutional clients.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <AboutUsRow>
          <AboutUsImage src={FreeAgent} />
          <AboutUsColumn>
            <AboutUsHeading>FreeAgent</AboutUsHeading>
            <AboutUsText>
              Accounting software simplified. FreeAgent makes it easy for small
              business owners and freelancers to manage their books, relax about
              tax and get on with the work they love.
            </AboutUsText>
          </AboutUsColumn>
        </AboutUsRow>
        <BackButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopDuration}
        />
      </BeigeContentContainer>
    </ExperimentContainer>
  );
};

export default AboutUsPopUp;
