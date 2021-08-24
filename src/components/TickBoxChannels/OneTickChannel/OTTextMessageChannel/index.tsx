import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  TextImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import text from "../../../../images/text.png";
import { useDispatch } from "react-redux";
import {
  tickTextMessage,
  unTickTextMessage,
} from "../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface OTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const OTTextMessageChannel: FC<OTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickTextMessage());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickTextMessage());
    setState(0);
  };
  return (
    <>
      {state === 0 && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              clickFunc();
            }}
          >
            <ClickBox>
              <img src={checkbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>Text message</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TextImg>
              <img src={text} alt="" />
            </TextImg>{" "}
          </Channel>
        </ChannelWrapper>
      )}
      {state === 1 && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              unClickFunc();
            }}
          >
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>Text message</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TextImg>
              <img src={text} alt="" />
            </TextImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default OTTextMessageChannel;
