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
import { usePageDuration } from "../../../../hooks/usePageDuration";
import { useHistory } from "react-router-dom";

const PrivacyChannel = () => {
  const history = useHistory();
  const stopDuration = usePageDuration("privacy_pop_up");
  const handleNextPage = (route: string) => {
    stopDuration();
    history.push(route);
  };

  return (
    <PrivacyChannelWrapper>
      <PrivacyChannelStyle onClick={() => handleNextPage}>
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
