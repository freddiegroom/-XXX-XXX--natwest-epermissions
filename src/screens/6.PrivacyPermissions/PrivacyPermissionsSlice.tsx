import { createSlice } from "@reduxjs/toolkit";

export interface PrivacyPermissionsState {
  privacyNoticeClicks: number;
}

const initialState: PrivacyPermissionsState = {
  privacyNoticeClicks: 0,
};

export const privacyPermissionsSlice = createSlice({
  name: "privacyPermissions",
  initialState,
  reducers: {
    clickPrivacyNotice: (state) => {
      state.privacyNoticeClicks++;
    },
  },
});

export const { clickPrivacyNotice } = privacyPermissionsSlice.actions;

export default privacyPermissionsSlice.reducer;
