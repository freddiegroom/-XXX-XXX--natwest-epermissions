import React from "react";
import {
  PrivacyChannelBoxArrowImg,
  PrivacyChannelBoxText,
  PrivacyChannelInfoImg,
  PrivacyChannelStyle,
  PrivacyChannelWrapper,
} from "./PrivacyChannel.styles";
import infoIcon from "./info-icon.png";
import infoSquareIcon from "./square-arrow-icon.png";
import { usePageDuration } from "hooks/usePageDuration";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickPrivacyPermissions } from "redux/InLifeSlice";

const PrivacyChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const stopDuration = usePageDuration("privacy_pop_up");
  const handleNextPage = (route: string) => {
    dispatch(clickPrivacyPermissions());
    stopDuration();
    history.push(route);
  };

  return (
    <PrivacyChannelWrapper>
      <PrivacyChannelStyle onClick={() => handleNextPage("/PrivacyPopUp")}>
        <PrivacyChannelInfoImg src={infoIcon} />
        <PrivacyChannelBoxText>
          You can find full details of how we use customer information here.
        </PrivacyChannelBoxText>
        <PrivacyChannelBoxArrowImg src={infoSquareIcon} />
      </PrivacyChannelStyle>
    </PrivacyChannelWrapper>
  );
};

export default PrivacyChannel;
