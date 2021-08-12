import React, { FC } from "react";
import { ExperimentContainerStyle } from "./ExperimentContainer.style";

const ExperimentContainer: FC = ({ children }) => {
  return <ExperimentContainerStyle>{children}</ExperimentContainerStyle>;
};

export default ExperimentContainer;
