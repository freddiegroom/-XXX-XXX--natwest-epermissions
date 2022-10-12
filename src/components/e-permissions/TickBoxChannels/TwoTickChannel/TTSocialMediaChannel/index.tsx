import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  SocialImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";

import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import social from "../../../../images/social.png";
import { useDispatch } from "react-redux";
import {
  tickSocialMedia,
  unTickSocialMedia,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface TTSocialMediaChannelProps {
  state: any;
  setState: any;
}

const TTSocialMediaChannel: FC<TTSocialMediaChannelProps> = ({
  state,
  setState,
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
      {state === 3 && (
        <ChannelWrapper>
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickBox>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
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
      {state === 0 && (
        <ChannelWrapper>
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickBox>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
              <img
                src={tickedCheckbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
              ></img>
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
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickedBox>
              <img
                src={tickedCheckbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
              <img
                src={checkbox}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
              ></img>
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

export default TTSocialMediaChannel;
