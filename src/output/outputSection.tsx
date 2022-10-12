import React, { FC } from "react";
import { useEFSData } from "@dectech/react-library";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import selectOutput from "./output.selectors";

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

export const OutputSection: FC = () => {
  const {
    outputCondition,
    outputReduxStore,
    outputPageDurations,
    outputInLifeInitialMobileAppPrompts,
    outputInLifeMobileAppPrompts,
    outputInLifeInitialTextMessage,
    outputInLifeTextMessage,
    outputInLifeInitialEmail,
    outputInLifeEmail,
    outputInLifeInitialTelephone,
    outputInLifeTelephone,
    outputInLifeInitialPost,
    outputInLifePost,
    outputInLifeInitialSocialMedia,
    outputInLifeSocialMedia,
    outputInLifeClickPrivacyPermissions,
    outputInLifeOpenAccordionMobileApp,
    outputInLifeOpenAccordionSocialMedia,
  } = useEFSData();

  const outputData = useSelector(selectOutput);

  const reduxStores = useSelector((state: RootState) =>
    JSON.stringify({
      inLife: state.InLifeSlice,
      durations: state.pageDuration,
    })
  );

  return (
    <>
      {/* TODO: Output condition */}
      <OutputLine
        varname={outputCondition}
        value={`${outputData.efsCondition}`}
        label="condition"
      />
      <OutputLine
        varname={outputReduxStore}
        value={`${reduxStores}`}
        label="redux store (debug)"
      />
      <OutputLine
        varname={outputPageDurations}
        value={JSON.stringify(outputData.durations)}
        label="page durations (secs)"
      />
      {/*InLife */}
      <OutputLine
        varname={outputInLifeInitialMobileAppPrompts}
        value={`${outputData.inLife.initialMobileAppPrompts}`}
        label="in life INITIAL mobile app prompts"
      />
      <OutputLine
        varname={outputInLifeMobileAppPrompts}
        value={`${outputData.inLife.mobileAppPrompts}`}
        label="in life mobile app prompts"
      />
      <OutputLine
        varname={outputInLifeInitialTextMessage}
        value={`${outputData.inLife.initialTextMessage}`}
        label="in life INITIAL text message"
      />
      <OutputLine
        varname={outputInLifeTextMessage}
        value={`${outputData.inLife.textMessage}`}
        label="in life text message"
      />
      <OutputLine
        varname={outputInLifeInitialEmail}
        value={`${outputData.inLife.initialEmail}`}
        label="in life INITIAL email"
      />
      <OutputLine
        varname={outputInLifeEmail}
        value={`${outputData.inLife.email}`}
        label="in life email"
      />
      <OutputLine
        varname={outputInLifeInitialTelephone}
        value={`${outputData.inLife.initialTelephone}`}
        label="in life INITIAL telephone"
      />
      <OutputLine
        varname={outputInLifeTelephone}
        value={`${outputData.inLife.telephone}`}
        label="in life telephone"
      />
      <OutputLine
        varname={outputInLifeInitialPost}
        value={`${outputData.inLife.initialPost}`}
        label="in life INITIAL post"
      />
      <OutputLine
        varname={outputInLifePost}
        value={`${outputData.inLife.post}`}
        label="in life post"
      />
      <OutputLine
        varname={outputInLifeInitialSocialMedia}
        value={`${outputData.inLife.initialSocialMedia}`}
        label="in life INITIAL social media"
      />
      <OutputLine
        varname={outputInLifeSocialMedia}
        value={`${outputData.inLife.socialMedia}`}
        label="in life social media"
      />
      <OutputLine
        varname={outputInLifeClickPrivacyPermissions}
        value={`${outputData.inLife.clickPrivacyPermissions}`}
        label="in life click privacy permissions"
      />
      <OutputLine
        varname={outputInLifeOpenAccordionMobileApp}
        value={`${outputData.inLife.openAccordionMobileApp}`}
        label="in life open accordion mobile app"
      />
      <OutputLine
        varname={outputInLifeOpenAccordionSocialMedia}
        value={`${outputData.inLife.openAccordionSocialMedia}`}
        label="in life click open accordion social media"
      />
    </>
  );
};
