import React, { FC } from "react";
import {
  Channel,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  YesNoContainer,
  ChannelTextWide,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import { useDispatch } from "react-redux";
import {
  tickNatwestEmails,
  unTickNatwestEmails,
} from "screens/6.PrivacyPermissions/PrivacyPermissionsSlice";

interface TTNatwestEmailsChannelProps {
  state: any;
  setState: any;
}

const TTNatwestEmailsChannel: FC<TTNatwestEmailsChannelProps> = ({
  state,
  setState,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickNatwestEmails());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickNatwestEmails());
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
              <p>
                I'm happy for you to analyse my interaction with NatWest emails.
              </p>
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
              <p>
                I'm happy for you to analyse my interaction with NatWest emails.
              </p>
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
              <p>
                I'm happy for you to analyse my interaction with NatWest emails.
              </p>
            </ChannelTextWide>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTNatwestEmailsChannel;
