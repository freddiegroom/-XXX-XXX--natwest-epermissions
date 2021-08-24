import React, { FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  EmailImg,
  YesNoContainer,
} from "../TwoTickChannel.styles";
import tickedCheckbox from "../../../../images/tick-checkbox.png";
import checkbox from "../../../../images/checkbox.png";
import email from "../../../../images/email.png";
import { useDispatch } from "react-redux";
import {
  tickEmail,
  unTickEmail,
} from "../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface TTEmailChannelProps {
  state: any;
  setState: any;
  hideSubText?: boolean;
}

const TTEmailChannel: FC<TTEmailChannelProps> = ({
  state,
  setState,
  hideSubText,
}) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickEmail());
    setState(1);
  };
  const unClickFunc = () => {
    dispatch(unTickEmail());
    setState(0);
  };
  return (
    <>
      {state === 3 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel>
            <ClickBox>
              <img src={checkbox} alt="" onClick={() => clickFunc()}></img>
              <img src={checkbox} alt="" onClick={() => unClickFunc()}></img>
            </ClickBox>
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>{" "}
          </Channel>
        </ChannelWrapper>
      )}
      {state === 0 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel onClick={() => clickFunc()}>
            <ClickBox>
              <img src={checkbox} alt=""></img>
              <img src={tickedCheckbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>{" "}
          </Channel>
        </ChannelWrapper>
      )}
      {state === 1 && (
        <ChannelWrapper>
          {" "}
          <YesNoContainer>
            <p>YES</p>
            <p>NO</p>
          </YesNoContainer>{" "}
          <Channel onClick={() => unClickFunc()}>
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
              <img src={checkbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>Email</p>
              {!hideSubText && <p className="sub">alexsmith@gmail.com</p>}
            </ChannelText>
            <EmailImg>
              <img src={email} alt="" />
            </EmailImg>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default TTEmailChannel;
