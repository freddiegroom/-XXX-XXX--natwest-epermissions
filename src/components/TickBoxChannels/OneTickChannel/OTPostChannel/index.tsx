import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  PostImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import post from "../../../../images/post.png";

const OTPostChannel: FC = () => {
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
              <p>Post</p>
              <p className="sub">1 Example Road, Edinburgh. EH1 1HE</p>
            </ChannelText>
            <PostImg>
              <img src={post} alt="" />
            </PostImg>{" "}
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
              <p>Post</p>
              <p className="sub">1 Example Road, Edinburgh. EH1 1HE</p>
            </ChannelText>
            <PostImg>
              <img src={post} alt="" />
            </PostImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default OTPostChannel;
