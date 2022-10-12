import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  SocialImg,
} from "../OneTickChannel.styles";

import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import social from "images/social.png";
import { useDispatch } from "react-redux";
import {
  tickSocialMedia,
  unTickSocialMedia,
} from "redux/MarketingPreferencesSlice";

interface OTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const OTSocialMediaChannel: FC<OTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickSocialMedia());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickSocialMedia());
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
              <p>Social media*</p>
              {/* <p className="sub">0778****234</p> */}
            </ChannelText>
            <SocialImg>
              <img src={social} alt="" />
            </SocialImg>{" "}
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
              <p>Social media*</p>
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
