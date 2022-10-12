import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
} from "../NoImageChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import { useDispatch } from "react-redux";
import {
  tickThirdParty,
  unTickThirdParty,
} from "redux/PrivacyPermissionsSlice";

const ThirdPartyChannel: FC = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              dispatch(tickThirdParty());
              setClicked(true);
            }}
          >
            <ClickBox>
              <img src={checkbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>Third party news and offers</p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
      {clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              dispatch(unTickThirdParty());
              setClicked(false);
            }}
          >
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>Third party news and offers</p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default ThirdPartyChannel;
