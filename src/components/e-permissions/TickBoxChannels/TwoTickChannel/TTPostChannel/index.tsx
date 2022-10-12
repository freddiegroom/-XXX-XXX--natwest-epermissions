import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  PostImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import post from "images/post.png";
import { useDispatch } from "react-redux";
import {
  tickPost,
  unTickPost,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface TTPostChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTPostChannel: FC<TTPostChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickPost());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickPost());
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
              <p>Post</p>
              {!hideSubText && (
                <p className="sub">1 Example Road, Edinburgh, EH1 1HE</p>
              )}{" "}
            </ChannelText>
            <PostImg>
              <img src={post} alt="" />
            </PostImg>{" "}
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
              <p>Post</p>
              {!hideSubText && (
                <p className="sub">1 Example Road, Edinburgh, EH1 1HE</p>
              )}{" "}
            </ChannelText>
            <PostImg>
              <img src={post} alt="" />
            </PostImg>{" "}
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
              <p>Post</p>
              {!hideSubText && (
                <p className="sub">1 Example Road, Edinburgh, EH1 1HE</p>
              )}
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

export default TTPostChannel;
