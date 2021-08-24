import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import {
  tickOAU,
  unTickOAU,
} from "../../../screens/5.MarketingPreferences/MarketingPreferencesSlice";
import {
  OffersAndUpdatesContainer,
  OAUBox,
  OAUBoxTicked,
} from "./OffersAndUpdates.styles";
import tickBox from "../../../images/tick-checkbox.png";

const OffersAndUpdates: FC = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickFunc = () => {
    dispatch(tickOAU());
    setClicked(true);
  };
  const unClickFunc = () => {
    dispatch(unTickOAU());
    setClicked(false);
  };
  return (
    <>
      <OffersAndUpdatesContainer>
        {!clicked && (
          <OAUBox
            onClick={(e) => {
              e.preventDefault();
              clickFunc();
            }}
          />
        )}
        {clicked && (
          <OAUBoxTicked
            src={tickBox}
            alt={`${tickBox}`}
            onClick={(e) => {
              e.preventDefault();
              unClickFunc();
            }}
          />
        )}
        <div>{children}</div>
      </OffersAndUpdatesContainer>
    </>
  );
};

export default OffersAndUpdates;
