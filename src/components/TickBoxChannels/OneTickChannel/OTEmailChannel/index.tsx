import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  EmailImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import email from "../../../../images/email.png";
import { useDispatch } from "react-redux";
import {
  tickEmail,
  unTickEmail,
} from "../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";
import { store } from "../../../../redux/store";

interface OTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const OTEmailChannel: FC<OTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  console.log(store);

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
      {state === 0 && (
        <ChannelWrapper>
          <Channel>
            <ClickBox
              onClick={(e) => {
                e.preventDefault();
                clickFunc();
              }}
            >
              <img src={checkbox} alt=""></img>
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
          <Channel>
            <ClickedBox
              onClick={(e) => {
                e.preventDefault();
                unClickFunc();
              }}
            >
              <img src={tickedCheckbox} alt=""></img>
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

export default OTEmailChannel;
