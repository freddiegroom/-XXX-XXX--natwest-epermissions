import React, { FC } from "react";
import {
  ChannelWrapper,
  ChannelText,
  ChannelSubText,
  ChannelContainer,
  ChannelRow,
} from "./Channel.styles";
import SwitchBox from "./SwitchBox";

interface ChannelProps {
  text: string;
  subText?: string;
  switch?: boolean;
  checkbox?: boolean;
  state: any;
  setState: any;
  tickRedux: any;
  unTickRedux: any;
}

const Channel: FC<ChannelProps> = ({
  text,
  subText,
  state,
  setState,
  tickRedux,
  unTickRedux,
}) => {
  return (
    <ChannelWrapper>
      <ChannelContainer>
        <ChannelRow>
          <ChannelText>{text}</ChannelText>
          <SwitchBox
            state={state}
            setState={setState}
            tickRedux={tickRedux}
            unTickRedux={unTickRedux}
          />
          {/* <CheckBoxContainer>
            <CheckBox label="Yes" />
            <CheckBox label="No" />
          </CheckBoxContainer> */}
        </ChannelRow>
        {subText && <ChannelSubText>{subText}</ChannelSubText>}
      </ChannelContainer>
    </ChannelWrapper>
  );
};

export default Channel;
