import React, { useState, FC } from "react";
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

const NatwestEmailsChannel: FC = () => {
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
              <p>Other NatWest group news and offers</p>
            </ChannelText>
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
              <p>Other NatWest group news and offers</p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default NatwestEmailsChannel;
