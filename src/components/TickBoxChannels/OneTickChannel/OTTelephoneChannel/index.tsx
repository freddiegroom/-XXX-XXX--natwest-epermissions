import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  TelephoneImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import telephone from "../../../../images/telephone.png";

const OTTelephoneChannel: FC = () => {
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
              <p>Telephone</p>
              <p className="sub">0778****234</p>
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>{" "}
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
              <p>Telephone</p>
              <p className="sub">0778****234</p>
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
