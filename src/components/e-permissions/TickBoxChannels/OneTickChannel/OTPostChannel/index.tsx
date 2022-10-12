import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  PostImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import post from "images/post.png";
import { useDispatch } from "react-redux";
import {
  tickPost,
  unTickPost,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface OTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const OTPostChannel: FC<OTEmailChannelProps> = ({
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
              <p>Post</p>
              {!hideSubText && (
                <p className="sub">1 Example Road, Edinburgh, EH1 1HE</p>
              )}
            </ChannelText>
            <PostImg>
              <img src={post} alt="" />
            </PostImg>{" "}
          </Channel>
        </ChannelWrapper>
      )}
      {state === 1 && (
        <ChannelWrapper>
          <Channel>
            <ClickedBox
              onClick={(e) => {
                e.preventDefault();
                unClickFunc();
              }}
            >
              <img src={tickedCheckbox} alt=""></img>
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

export default OTPostChannel;
