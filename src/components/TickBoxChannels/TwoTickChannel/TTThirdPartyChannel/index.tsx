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
import {
  tickThirdParty,
  unTickThirdParty,
} from "../../../../screens/6.PrivacyPermissions/PrivacyPermissionsSlice";

interface TTThirdPartyChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTThirdPartyChannel: FC<TTThirdPartyChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickThirdParty());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickThirdParty());
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
              <p>Third parties</p>
              {!hideSubText && (
                <p className="sub">
                  Relevant offers or information from selected 3rd parties we
                  partner with. For example, other financial services providers,
                  utility providers, or charities we have a relationship with.
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
              <p>Third parties</p>
              {!hideSubText && (
                <p className="sub">
                  Relevant offers or information from selected 3rd parties we
                  partner with. For example, other financial services providers,
                  utility providers, or charities we have a relationship with.
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
              <p>Third parties</p>
              {!hideSubText && (
                <p className="sub">
                  Relevant offers or information from selected 3rd parties we
                  partner with. For example, other financial services providers,
                  utility providers, or charities we have a relationship with.
                </p>
              )}
            </ChannelTextWide>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTThirdPartyChannel;
