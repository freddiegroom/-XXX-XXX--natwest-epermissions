import React, { FC, useCallback } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
  EmailImg,
} from "../OneTickChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import email from "images/email.png";
import { useDispatch } from "react-redux";
import {
  tickEmail,
  unTickEmail,
} from "../../../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";

interface OTEmailChannelProps {
  state: number;
  setState(newState: number): void;
  hideSubText?: boolean;
}

// const handleClickbox = (dispatch, tickEmail, setState) => (e) => {
//   e.preventDefault();
//   dispatch(tickEmail());
//   setState(1);
// };

const OTEmailChannel: FC<OTEmailChannelProps> = ({
  // initialState,
  state,
  setState,
  hideSubText,
}) => {
  // const context = useContext(ScenarioContext)
  // const [state, setState] = useState(initialState)
  const dispatch = useDispatch();
  // const clickFunc = () => {
  //   dispatch(tickEmail());
  //   setState(1);
  // };
  // const unClickFunc = () => {
  //   dispatch(unTickEmail());
  //   setState(0);
  // };

  const handleClickbox = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(tickEmail());
      setState(1);
    },
    [dispatch, setState]
  );

  const handleUnclickbox = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(unTickEmail());
      setState(0);
    },
    [dispatch, setState]
  );

  return (
    <>
      {state === 0 && (
        <ChannelWrapper>
          <Channel>
            {/* <ClickBox onClick={handleClickbox(dispatch, tickEmail, setState)}> */}
            <ClickBox onClick={handleClickbox}>
              <img src={checkbox} alt=""></img>
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
          <Channel>
            <ClickedBox onClick={handleUnclickbox}>
              <img src={tickedCheckbox} alt=""></img>
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

export default OTEmailChannel;
