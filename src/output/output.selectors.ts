import { createSelector } from "@reduxjs/toolkit";
import { getPageDurations } from "../redux/pageDurationStore";
import { RootState } from "../redux/store";

const selectOutput = createSelector(
  getPageDurations,
  (state) => state,
  (pageDurations, state: RootState) => {
    // Do transformations as necessary

    return {
      efsCondition: state.conditionSelector.efsCondition,
      durations: pageDurations,
      productChoice: { choice: state.productChoiceSlice.choice },
      personalDetails: {
        title: state.personalDetailsSlice.title,
        countryNationality: state.personalDetailsSlice.nationality,
        address: state.personalDetailsSlice.address,
      },
      marketingPreferences: {
        offersAndUpdates: state.MarketingPreferencesSlice.offersAndUpdates,
        initialTextMessage: state.MarketingPreferencesSlice.initialTextMessage,
        textMessage: state.MarketingPreferencesSlice.textMessage,
        initialEmail: state.MarketingPreferencesSlice.initialEmail,
        email: state.MarketingPreferencesSlice.email,
        initialTelephone: state.MarketingPreferencesSlice.initialTelephone,
        telephone: state.MarketingPreferencesSlice.telephone,
        initialPost: state.MarketingPreferencesSlice.initialPost,
        post: state.MarketingPreferencesSlice.post,
        initialSocialMedia: state.MarketingPreferencesSlice.initialSocialMedia,
        socialMedia: state.MarketingPreferencesSlice.socialMedia,
        selectAll: state.MarketingPreferencesSlice.selectAll,
        selectNone: state.MarketingPreferencesSlice.selectNone,
      },
      privacyPermissions: {
        privacyNotice: state.PrivacyPermissionsSlice.privacyNotice,
        aboutUsNotice: state.PrivacyPermissionsSlice.aboutUsNotice,
        otherNews: state.PrivacyPermissionsSlice.otherNews,
        thirdParty: state.PrivacyPermissionsSlice.thirdParty,
        natwestEmails: state.PrivacyPermissionsSlice.natwestEmails,
      },
    };
  }
);

export default selectOutput;
/*  Where you want the output:

const outputData = useSelector(selectOutput)

<OutputLine id="v_12312" value={outputData.productChoices} />
 */
