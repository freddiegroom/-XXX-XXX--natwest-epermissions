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
    outputProductChoice,
    outputPersonalDetailsTitle,
    outputPersonalDetailsNationality,
    outputPersonalDetailsAddress,
    outputMarketingPreferencesOffersAndUpdates,
    outputMarketingPreferencesInitialTextMessage,
    outputMarketingPreferencesTextMessage,
    outputMarketingPreferencesInitialEmail,
    outputMarketingPreferencesEmail,
    outputMarketingPreferencesInitialTelephone,
    outputMarketingPreferencesTelephone,
    outputMarketingPreferencesInitialPost,
    outputMarketingPreferencesPost,
    outputMarketingPreferencesInitialSocialMedia,
    outputMarketingPreferencesSocialMedia,
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
        varname={outputProductChoice}
        value={`${outputData.productChoice}`}
        label="product choice"
      />
      <OutputLine
        varname={outputPersonalDetailsTitle}
        value={`${outputData.personalDetails.title}`}
        label="personal details title"
      />
      <OutputLine
        varname={outputPersonalDetailsNationality}
        value={`${outputData.personalDetails.nationality}`}
        label="personal details nationality"
      />
      <OutputLine
        varname={outputPersonalDetailsAddress}
        value={`${outputData.personalDetails.address}`}
        label="personal details address"
      />
      <OutputLine
        varname={outputMarketingPreferencesOffersAndUpdates}
        value={`${outputData.marketingPreferences.offersAndUpdates}`}
        label="marketing preferences offers and updates"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialTextMessage}
        value={`${outputData.marketingPreferences.initialTextMessage}`}
        label="marketing preferences initial text message"
      />
      <OutputLine
        varname={outputMarketingPreferencesTextMessage}
        value={`${outputData.marketingPreferences.textMessage}`}
        label="marketing preferences text message"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialEmail}
        value={`${outputData.marketingPreferences.initialEmail}`}
        label="marketing preferences initial email"
      />
      <OutputLine
        varname={outputMarketingPreferencesEmail}
        value={`${outputData.marketingPreferences.email}`}
        label="marketing preferences email"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialTelephone}
        value={`${outputData.marketingPreferences.initialTelephone}`}
        label="marketing preferences initial telephone"
      />
      <OutputLine
        varname={outputMarketingPreferencesTelephone}
        value={`${outputData.marketingPreferences.telephone}`}
        label="marketing preferences telephone"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialPost}
        value={`${outputData.marketingPreferences.initialPost}`}
        label="marketing preferences initial post"
      />
      <OutputLine
        varname={outputMarketingPreferencesPost}
        value={`${outputData.marketingPreferences.post}`}
        label="marketing preferences post"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialSocialMedia}
        value={`${outputData.marketingPreferences.initialPost}`}
        label="marketing preferences initial post"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialSocialMedia}
        value={`${outputData.marketingPreferences.post}`}
        label="marketing preferences post"
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
