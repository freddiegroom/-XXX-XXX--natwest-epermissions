import React, { FC } from "react";
import { useEFSData } from "@dectech/react-library";

interface OutputLineProps {
  varname: string;
  value: string;
  label: string;
}

const OutputLine: FC<OutputLineProps> = ({ varname, value = "", label }) => {
  const { showOutput = true }: { showOutput?: boolean } = useEFSData();

  // if showing output, then show labels in clear way
  if (showOutput) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0px 0px 8px 8px",
        }}
      >
        {showOutput && label && <span style={{ width: "15em" }}>{label}</span>}
        <input
          type={showOutput ? "text" : "hidden"}
          id={varname}
          name={varname}
          value={value !== null ? value : ""}
          onChange={() => {}}
          style={{
            width: "80%",
          }}
          readOnly
        />
      </div>
    );
  }

  return (
    <input
      type="hidden"
      id={varname}
      name={varname}
      value={value !== null ? value : ""}
      onChange={() => {}}
      readOnly
    />
  );
};

/**
 * Component to display the needed output for this experiment
 */

export const OutputSection: FC = () => {
  const {} = useEFSData();

  return (
    <>
      <OutputLine
        varname={"test"}
        value={JSON.stringify("test")}
        label="timeSpentPerPage"
      />
    </>
  );
};
