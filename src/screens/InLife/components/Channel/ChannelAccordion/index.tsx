import React, { FC, useState } from "react";
import {
  ChannelAccordionStyle,
  ChannelAccordionWrapper,
  ChannelAccordionImage,
  ChannelAccordionImagePurple,
} from "./ChannelAccordion.styles";

interface ChannelAccordionProps {
  openText?: string;
  closedText?: string;
}

const ChannelAccordion: FC<ChannelAccordionProps> = ({
  openText,
  closedText,
}) => {
  const [open, setOpen] = useState(0);
  return (
    <ChannelAccordionWrapper>
      {!open && (
        <>
          <ChannelAccordionStyle onClick={() => setOpen(1)}>
            {closedText}
          </ChannelAccordionStyle>
          <ChannelAccordionImage>+</ChannelAccordionImage>
        </>
      )}
      {!!open && (
        <>
          <ChannelAccordionStyle onClick={() => setOpen(0)}>
            {openText}
          </ChannelAccordionStyle>
          <ChannelAccordionImagePurple>-</ChannelAccordionImagePurple>
        </>
      )}
    </ChannelAccordionWrapper>
  );
};

export default ChannelAccordion;
