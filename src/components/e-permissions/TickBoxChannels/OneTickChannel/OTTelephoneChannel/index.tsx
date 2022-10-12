import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  TelephoneImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import telephone from "images/telephone.png";
import { useDispatch } from "react-redux";
import {
  tickTelephone,
  unTickTelephone,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface OTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const OTTelephoneChannel: FC<OTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickTelephone());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickTelephone());
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
              <p>Telephone</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>{" "}
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
              <p>Telephone</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default OTTelephoneChannel;
