import { createSlice } from "@reduxjs/toolkit";

export interface PrivacyPermissionsState {
  privacyNotice: number;
  otherNews: number;
  thirdParty: number;
  natwestEmails: number;
}

const initialState: PrivacyPermissionsState = {
  privacyNotice: 0,
  otherNews: -77,
  thirdParty: -77,
  natwestEmails: -77,
};

export const privacyPermissionsSlice = createSlice({
  name: "privacyPermissions",
  initialState,
  reducers: {
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
  clickPrivacyNotice,
  tickOtherNews,
  unTickOtherNews,
  tickThirdParty,
  unTickThirdParty,
  tickNatwestEmails,
  unTickNatwestEmails,
} = privacyPermissionsSlice.actions;

export default privacyPermissionsSlice.reducer;
