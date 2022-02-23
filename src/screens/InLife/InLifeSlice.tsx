import { createSlice } from "@reduxjs/toolkit";

export interface InLifeState {
  // initialOffersAndUpdates: number;
  // offersAndUpdates: number;
  initialMobileAppPrompts: number;
  mobileAppPrompts: number;
  initialTextMessage: number;
  textMessage: number;
  initialEmail: number;
  email: number;
  initialTelephone: number;
  telephone: number;
  initialPost: number;
  post: number;
  initialSocialMedia: number;
  socialMedia: number;
  clickPrivacyPermissions: number;
  openAccordionMobileApp: number;
  openAccordionSocialMedia: number;
}

const initialState: InLifeState = {
  initialMobileAppPrompts: -77,
  mobileAppPrompts: -77,
  initialTextMessage: -77,
  textMessage: -77,
  initialEmail: -77,
  email: -77,
  initialTelephone: -77,
  telephone: -77,
  initialPost: -77,
  post: -77,
  initialSocialMedia: -77,
  socialMedia: -77,
  clickPrivacyPermissions: 0,
  openAccordionMobileApp: 0,
  openAccordionSocialMedia: 0,
};

export const InLifeSlice = createSlice({
  name: "inLife",
  initialState,
  reducers: {
    tickMobileAppPrompts: (state) => {
      state.mobileAppPrompts = 1;
    },
    unTickMobileAppPrompts: (state) => {
      state.mobileAppPrompts = 0;
    },
    saveMobileAppPrompts: (state, action) => {
      state.initialMobileAppPrompts = action.payload;
    },
    tickTextMessage: (state) => {
      state.textMessage = 1;
    },
    unTickTextMessage: (state) => {
      state.textMessage = 0;
    },
    saveTextMessage: (state, action) => {
      state.initialTextMessage = action.payload;
    },
    tickEmail: (state) => {
      state.email = 1;
    },
    unTickEmail: (state) => {
      state.email = 0;
    },
    saveEmail: (state, action) => {
      state.initialEmail = action.payload;
    },
    tickTelephone: (state) => {
      state.telephone = 1;
    },
    unTickTelephone: (state) => {
      state.telephone = 0;
    },
    saveTelephone: (state, action) => {
      state.initialTelephone = action.payload;
    },
    tickPost: (state) => {
      state.post = 1;
    },
    unTickPost: (state) => {
      state.post = 0;
    },
    savePost: (state, action) => {
      state.initialPost = action.payload;
    },
    tickSocialMedia: (state) => {
      state.socialMedia = 1;
    },
    unTickSocialMedia: (state) => {
      state.socialMedia = 0;
    },
    saveSocialMedia: (state, action) => {
      state.initialSocialMedia = action.payload;
    },
    clickPrivacyPermissions: (state) => {
      state.clickPrivacyPermissions = 1;
    },
    clickOpenAccordionMobileApp: (state) => {
      state.openAccordionMobileApp = 1;
    },
    clickOpenAccordionSocialMedia: (state) => {
      state.openAccordionSocialMedia = 1;
    },
  },
});

export const {
  tickMobileAppPrompts,
  unTickMobileAppPrompts,
  saveMobileAppPrompts,
  tickTextMessage,
  unTickTextMessage,
  saveTextMessage,
  tickEmail,
  unTickEmail,
  saveEmail,
  tickTelephone,
  unTickTelephone,
  saveTelephone,
  tickPost,
  unTickPost,
  savePost,
  tickSocialMedia,
  unTickSocialMedia,
  saveSocialMedia,
  clickPrivacyPermissions,
  clickOpenAccordionMobileApp,
  clickOpenAccordionSocialMedia,
} = InLifeSlice.actions;

export default InLifeSlice.reducer;
