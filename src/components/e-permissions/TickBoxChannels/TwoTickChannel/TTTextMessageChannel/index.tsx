import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  TextImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import text from "images/text.png";
import { useDispatch } from "react-redux";
import {
  tickTextMessage,
  unTickTextMessage,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface TTTextMessageChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTTextMessageChannel: FC<TTTextMessageChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
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
      {state === 3 && (
        <ChannelWrapper>
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>
          <Channel>
            <ClickBox>
              <img
                src={checkbox}
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
                alt=""
              ></img>
              <img
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
                src={checkbox}
                alt=""
              ></img>
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
      {state === 0 && (
        <ChannelWrapper>
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>
          <Channel
          // onClick={(e) => {
          //   e.preventDefault();
          //   clickFunc();
          // }}
          >
            <ClickBox>
              <img
                src={checkbox}
                onClick={(e) => {
                  e.preventDefault();
                  clickFunc();
                }}
                alt=""
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
                onClick={(e) => {
                  e.preventDefault();
                  unClickFunc();
                }}
                alt=""
              ></img>
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

export default TTTextMessageChannel;
