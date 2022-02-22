import React, { FC } from "react";
import {
  ChannelWrapper,
  ChannelText,
  ChannelSubText,
  ChannelContainer,
  ChannelRow,
  CheckBoxContainer,
} from "./Channel.styles";
import ChannelAccordion from "./ChannelAccordion";
import CheckBoxes from "./Checkboxes";
import SwitchBox from "./SwitchBox";

interface ChannelProps {
  text: string;
  subText?: string;
  switchBox?: boolean;
  checkbox?: boolean;
  state: any;
  setState: any;
  tickRedux: any;
  unTickRedux: any;
  openAccordionText?: string;
  closedAccordionText?: string;
  group?: boolean;
}

const Channel: FC<ChannelProps> = ({
  text,
  subText,
  state,
  setState,
  tickRedux,
  unTickRedux,
  switchBox,
  openAccordionText,
  closedAccordionText,
  group,
}) => {
  return (
    <>
      {!group && (
        <ChannelWrapper>
          <ChannelContainer>
            <ChannelRow>
              <ChannelText>{text}</ChannelText>
              {!!switchBox && (
                <SwitchBox
                  state={state}
                  setState={setState}
                  tickRedux={tickRedux}
                  unTickRedux={unTickRedux}
                />
              )}
              {!switchBox && (
                <CheckBoxContainer>
                  <CheckBoxes
                    state={state}
                    setState={setState}
                    tickRedux={tickRedux}
                    unTickRedux={unTickRedux}
                  />
                </CheckBoxContainer>
              )}
            </ChannelRow>
            {subText && <ChannelSubText>{subText}</ChannelSubText>}
            {!!openAccordionText && (
              <ChannelAccordion
                closedText={closedAccordionText}
                openText={openAccordionText}
              />
            )}
          </ChannelContainer>
        </ChannelWrapper>
      )}
      {!!group && (
        <ChannelContainer>
          <ChannelRow>
            <ChannelText>{text}</ChannelText>
            {!!switchBox && (
              <SwitchBox
                state={state}
                setState={setState}
                tickRedux={tickRedux}
                unTickRedux={unTickRedux}
              />
            )}
            {!switchBox && (
              <CheckBoxContainer>
                <CheckBoxes
                  state={state}
                  setState={setState}
                  tickRedux={tickRedux}
                  unTickRedux={unTickRedux}
                />
              </CheckBoxContainer>
            )}
          </ChannelRow>
          {subText && <ChannelSubText>{subText}</ChannelSubText>}
          {!!openAccordionText && (
            <ChannelAccordion
              closedText={closedAccordionText}
              openText={openAccordionText}
            />
          )}
        </ChannelContainer>
      )}
    </>
  );
};

export default Channel;
