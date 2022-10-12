import { createSlice } from "@reduxjs/toolkit";

export interface PrivacyPermissionsState {
  aboutUsNotice: number;
  privacyNotice: number;
  otherNews: number;
  thirdParty: number;
  natwestEmails: number;
}

const initialState: PrivacyPermissionsState = {
  aboutUsNotice: 0,
  privacyNotice: 0,
  otherNews: -77,
  thirdParty: -77,
  natwestEmails: -77,
};

export const privacyPermissionsSlice = createSlice({
  name: "privacyPermissions",
  initialState,
  reducers: {
    clickAboutUsNotice: (state) => {
      state.aboutUsNotice++;
    },
    clickPrivacyNotice: (state) => {
      state.privacyNotice++;
    },
    tickOtherNews: (state) => {
      state.otherNews = 1;
    },
    unTickOtherNews: (state) => {
      state.otherNews = 0;
    },
    tickThirdParty: (state) => {
      state.thirdParty = 1;
    },
    unTickThirdParty: (state) => {
      state.thirdParty = 0;
    },
    tickNatwestEmails: (state) => {
      state.natwestEmails = 1;
    },
    unTickNatwestEmails: (state) => {
      state.natwestEmails = 0;
    },
  },
});

export const {
  clickAboutUsNotice,
  clickPrivacyNotice,
  tickOtherNews,
  unTickOtherNews,
  tickThirdParty,
  unTickThirdParty,
  tickNatwestEmails,
  unTickNatwestEmails,
} = privacyPermissionsSlice.actions;

export default privacyPermissionsSlice.reducer;
