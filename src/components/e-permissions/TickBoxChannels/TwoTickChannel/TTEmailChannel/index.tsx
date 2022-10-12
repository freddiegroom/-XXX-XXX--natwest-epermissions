import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  EmailImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import email from "images/email.png";
import { useDispatch } from "react-redux";
import { tickEmail, unTickEmail } from "redux/MarketingPreferencesSlice";

interface TTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTEmailChannel: FC<TTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
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
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>{" "}
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
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>{" "}
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
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTEmailChannel;
