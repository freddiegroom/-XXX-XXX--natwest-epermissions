import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  SocialImg,
} from "../OneTickChannel.styles";

import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import social from "../../../../images/social.png";

const OTSocialMediaChannel: FC = () => {
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
              <p>SocialMedia*</p>
              {/* <p className="sub">0778****234</p> */}
            </ChannelText>
            <SocialImg>
              <img src={social} alt="" />
            </SocialImg>{" "}
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
              <p>Social Media*</p>
              {/* <p className="sub">0778****234</p> */}
            </ChannelText>
            <SocialImg>
              <img src={social} alt="" />
            </SocialImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default OTSocialMediaChannel;
