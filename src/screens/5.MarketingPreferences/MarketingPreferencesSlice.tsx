import { createSlice } from "@reduxjs/toolkit";

export interface MarketingPreferencesState {
  // initialOffersAndUpdates: number;
  offersAndUpdates: number;
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
  selectAll: number;
  selectNone: number;
}

const initialState: MarketingPreferencesState = {
  offersAndUpdates: -77,
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
  selectAll: 0,
  selectNone: 0,
};

export const marketingPreferencesSlice = createSlice({
  name: "marketingPreferences",
  initialState,
  reducers: {
    tickOAU: (state) => {
      state.offersAndUpdates = 1;
    },
    unTickOAU: (state) => {
      state.offersAndUpdates = 0;
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
    selectAll: (state) => {
      state.selectAll++;
    },
    selectNone: (state) => {
      state.selectNone++;
    },
  },
});

export const {
  tickOAU,
  unTickOAU,
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
  selectAll,
  selectNone,
} = marketingPreferencesSlice.actions;

export default marketingPreferencesSlice.reducer;
