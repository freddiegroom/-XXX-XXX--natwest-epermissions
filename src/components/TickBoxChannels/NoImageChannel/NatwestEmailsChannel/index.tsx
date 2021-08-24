import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
} from "../NoImageChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";

const NatwestEmailsChannel: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              setClicked(true);
            }}
          >
            <ClickBox>
              <img src={checkbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>
                Yes, I'm happy for you to analyse my interaction with NatWest
                emails.
              </p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
      {clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              setClicked(false);
            }}
          >
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>
                Yes, I'm happy for you to analyse my interaction with NatWest
                emails.
              </p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default NatwestEmailsChannel;
