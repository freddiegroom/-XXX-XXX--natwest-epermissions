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
      inLife: {
        initialMobileAppPrompts: state.InLifeSlice.initialMobileAppPrompts,
        mobileAppPrompts: state.InLifeSlice.mobileAppPrompts,
        initialTextMessage: state.InLifeSlice.initialTextMessage,
        textMessage: state.InLifeSlice.textMessage,
        initialEmail: state.InLifeSlice.initialEmail,
        email: state.InLifeSlice.email,
        initialTelephone: state.InLifeSlice.initialTelephone,
        telephone: state.InLifeSlice.telephone,
        initialPost: state.InLifeSlice.initialPost,
        post: state.InLifeSlice.post,
        initialSocialMedia: state.InLifeSlice.initialSocialMedia,
        socialMedia: state.InLifeSlice.socialMedia,
        clickPrivacyPermissions: state.InLifeSlice.clickPrivacyPermissions,
        openAccordionMobileApp: state.InLifeSlice.openAccordionMobileApp,
        openAccordionSocialMedia: state.InLifeSlice.openAccordionSocialMedia,
      },
    };
  }
);

export default selectOutput;
/*  Where you want the output:

const outputData = useSelector(selectOutput)

<OutputLine id="v_12312" value={outputData.productChoices} />
 */
