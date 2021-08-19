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

const OTTextMessageChannel: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <ChannelWrapper>
          <Channel onClick={() => setClicked(true)}>
            <ClickBox>
              <img src={checkbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>Text message</p>
              <p className="sub">0778****234</p>
            </ChannelText>
            <TextImg>
              <img src={text} alt="" />
            </TextImg>{" "}
          </Channel>
        </ChannelWrapper>
      )}
      {clicked && (
        <ChannelWrapper>
          <Channel onClick={() => setClicked(false)}>
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>Text message</p>
              <p className="sub">0778****234</p>
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
