import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ChannelAccordionStyle,
  ChannelAccordionWrapper,
  ChannelAccordionImage,
  ChannelAccordionImagePurple,
} from "./ChannelAccordion.styles";

interface ChannelAccordionProps {
  openText?: string;
  closedText?: string;
  accordionRedux?: any;
}

const ChannelAccordion: FC<ChannelAccordionProps> = ({
  openText,
  closedText,
  accordionRedux,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(0);
  const handleOpen = () => {
    setOpen(1);
    dispatch(accordionRedux());
  };
  return (
    <ChannelAccordionWrapper>
      {!open && (
        <>
          <ChannelAccordionStyle onClick={() => handleOpen()}>
            {closedText}
          </ChannelAccordionStyle>
          <ChannelAccordionImage onClick={() => handleOpen()}>
            +
          </ChannelAccordionImage>
        </>
      )}
      {!!open && (
        <>
          <ChannelAccordionStyle onClick={() => setOpen(0)}>
            {openText}
          </ChannelAccordionStyle>
          <ChannelAccordionImagePurple onClick={() => setOpen(0)}>
            -
          </ChannelAccordionImagePurple>
        </>
      )}
    </ChannelAccordionWrapper>
  );
};

export default ChannelAccordion;
