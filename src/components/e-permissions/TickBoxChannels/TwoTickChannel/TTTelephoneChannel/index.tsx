import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  TelephoneImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "../../../../../images/tick-checkbox.png";
import checkbox from "../../../../../images/checkbox.png";
import telephone from "../../../../../images/telephone.png";
import { useDispatch } from "react-redux";
import {
  tickTelephone,
  unTickTelephone,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface TTTelephoneChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTTelephoneChannel: FC<TTTelephoneChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickTelephone());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickTelephone());
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
              <p>Telephone</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>{" "}
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
              <p>Telephone</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>{" "}
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
              <p>Telephone</p>
              {!hideSubText && <p className="sub">0778****234</p>}
            </ChannelText>
            <TelephoneImg>
              <img src={telephone} alt="" />
            </TelephoneImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTTelephoneChannel;
