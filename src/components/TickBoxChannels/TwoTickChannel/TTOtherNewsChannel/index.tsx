import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  EmailImg,
  YesNoContainer,
  ChannelTextWide,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import email from "../../../../images/email.png";
import { useDispatch } from "react-redux";
import {
  tickEmail,
  unTickEmail,
} from "../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";
import { PrivacySpan } from "../../../../screens/6.PrivacyPermissions/PrivacyPermissions.styles";
import { useHistory } from "react-router-dom";

interface TTOtherNewsChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTOtherNewsChannel: FC<TTOtherNewsChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const handleNextPage = (route: string) => {
    history.push(route);
  };
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickEmail());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickEmail());
    setState(0);
  };
  return (
    <>
      {state === 3 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickBox>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
            </ClickBox>
            <ChannelTextWide>
              <p>Other NatWest companies</p>
              {!hideSubText && (
                <p className="sub">
                  Products, services and offers from other members of NatWest
                  Group plc. More information about the NatWest group can be
                  found at NatWestGroup.com by clicking on{" "}
                  <PrivacySpan
                    onClick={(e) => {
                      e.preventDefault();
                      // dispatch(clickAboutUsNotice());
                      handleNextPage("/AboutUsPopUp");
                    }}
                  >
                    'About Us'
                  </PrivacySpan>{" "}
                </p>
              )}
            </ChannelTextWide>
          </Channel>
        </ChannelWrapper>
      )}
      {state === 0 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickBox>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
              <img
                src={tickedCheckbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
            </ClickBox>
            <ChannelTextWide>
              <p>Other NatWest companies</p>
              {!hideSubText && (
                <p className="sub">
                  Products, services and offers from other members of NatWest
                  Group plc. More information about the NatWest group can be
                  found at NatWestGroup.com by clicking on ‘About Us’
                </p>
              )}
            </ChannelTextWide>
          </Channel>
        </ChannelWrapper>
      )}
      {state === 1 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickedBox>
              <img
                src={tickedCheckbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
            </ClickedBox>
            <ChannelTextWide>
              <p>Other NatWest companies</p>
              {!hideSubText && (
                <p className="sub">
                  Products, services and offers from other members of NatWest
                  Group plc. More information about the NatWest group can be
                  found at NatWestGroup.com by clicking on ‘About Us’
                </p>
              )}
            </ChannelTextWide>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTOtherNewsChannel;
