import React, { useState, FC } from "react";
import {
  OffersAndUpdatesContainer,
  OAUBox,
  OAUBoxTicked,
} from "./OffersAndUpdates.styles";

const OffersAndUpdates: FC = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <OffersAndUpdatesContainer>
        {!clicked && <OAUBox onClick={() => setClicked(true)} />}
        {clicked && <OAUBoxTicked onClick={() => setClicked(false)} />}
        <div>{children}</div>
      </OffersAndUpdatesContainer>
    </>
  );
};

export default OffersAndUpdates;
