import React, { FC } from "react";
import { useEFSData } from "@dectech/react-library";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
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
    // Product Choice
    outputProductChoiceChoice,
    // personalDetails: {
    outputPersonalDetailsTitle,
    outputPersonalDetailsNationality,
    outputPersonalDetailsAddress,
    // marketingPreferences
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
    outputMarketingPreferencesSelectAll,
    outputMarketingPreferencesSelectNone,
    //PrivacyPermissions
    outputPrivacyPermissionsPrivacyNotice,
    outputPrivacyPermissionsOtherNews,
    outputPrivacyPermissionsThirdParty,
    outputPrivacyPermissionsNatwestEmails,
  } = useEFSData();

  const outputData = useSelector(selectOutput);

  const reduxStores = useSelector((state: RootState) =>
    JSON.stringify({
      productChoice: state.productChoiceSlice,
      personalDetails: state.personalDetailsSlice,
      marketingPrefs: state.MarketingPreferencesSlice,
      privacyPermissions: state.PrivacyPermissionsSlice,
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
      {/* Product Choice */}
      <OutputLine
        varname={outputProductChoiceChoice}
        value={`${outputData.productChoice.choice}`}
        label="chosen product"
      />
      {/* Personal Details */}
      <OutputLine
        varname={outputPersonalDetailsTitle}
        value={`${outputData.personalDetails.title}`}
        label="personal details title"
      />
      <OutputLine
        varname={outputPersonalDetailsNationality}
        value={`${outputData.personalDetails.countryNationality}`}
        label="personal details nationality"
      />
      <OutputLine
        varname={outputPersonalDetailsAddress}
        value={`${outputData.personalDetails.address}`}
        label="personal details address"
      />
      {/* MarketingPreferences */}
      <OutputLine
        varname={outputMarketingPreferencesOffersAndUpdates}
        value={`${outputData.marketingPreferences.offersAndUpdates}`}
        label="marketing preferences offers and updates"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialTextMessage}
        value={`${outputData.marketingPreferences.initialTextMessage}`}
        label="marketing preferences INITIAL text message"
      />
      <OutputLine
        varname={outputMarketingPreferencesTextMessage}
        value={`${outputData.marketingPreferences.textMessage}`}
        label="marketing preferences text message"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialEmail}
        value={`${outputData.marketingPreferences.initialEmail}`}
        label="marketing preferences INITIAL email"
      />
      <OutputLine
        varname={outputMarketingPreferencesEmail}
        value={`${outputData.marketingPreferences.email}`}
        label="marketing preferences email"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialTelephone}
        value={`${outputData.marketingPreferences.initialTelephone}`}
        label="marketing preferences INITIAL telephone"
      />
      <OutputLine
        varname={outputMarketingPreferencesTelephone}
        value={`${outputData.marketingPreferences.telephone}`}
        label="marketing preferences telephone"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialPost}
        value={`${outputData.marketingPreferences.initialPost}`}
        label="marketing preferences INITIAL post"
      />
      <OutputLine
        varname={outputMarketingPreferencesPost}
        value={`${outputData.marketingPreferences.post}`}
        label="marketing preferences post"
      />
      <OutputLine
        varname={outputMarketingPreferencesInitialSocialMedia}
        value={`${outputData.marketingPreferences.initialSocialMedia}`}
        label="marketing preferences INITIAL social media"
      />
      <OutputLine
        varname={outputMarketingPreferencesSocialMedia}
        value={`${outputData.marketingPreferences.socialMedia}`}
        label="marketing preferences social media"
      />
      <OutputLine
        varname={outputMarketingPreferencesSelectAll}
        value={`${outputData.marketingPreferences.selectAll}`}
        label="marketing preferences select all"
      />
      <OutputLine
        varname={outputMarketingPreferencesSelectNone}
        value={`${outputData.marketingPreferences.selectNone}`}
        label="marketing preferences select none"
      />
      {/* Privacy Permissions */}
      <OutputLine
        varname={outputPrivacyPermissionsPrivacyNotice}
        value={`${outputData.privacyPermissions.privacyNotice}`}
        label="privacy permissions privacy notice"
      />
      <OutputLine
        varname={outputPrivacyPermissionsOtherNews}
        value={`${outputData.privacyPermissions.otherNews}`}
        label="privacy permissions other news"
      />
      <OutputLine
        varname={outputPrivacyPermissionsThirdParty}
        value={`${outputData.privacyPermissions.thirdParty}`}
        label="privacy permissions third party"
      />
      <OutputLine
        varname={outputPrivacyPermissionsNatwestEmails}
        value={`${outputData.privacyPermissions.natwestEmails}`}
        label="privacy permissions natwest emails"
      />
    </>
  );
};
