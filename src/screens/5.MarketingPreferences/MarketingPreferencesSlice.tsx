import { createSlice } from "@reduxjs/toolkit";

export interface MarketingPreferencesState {
  offersAndUpdates: number[];
  textMessage: number[];
  email: number[];
  telephone: number[];
  post: number[];
  socialMedia: number[];
}

const initialState: MarketingPreferencesState = {
  offersAndUpdates: [],
  textMessage: [],
  email: [],
  telephone: [],
  post: [],
  socialMedia: [],
};

export const marketingPreferencesSlice = createSlice({
  name: "marketingPreferences",
  initialState,
  reducers: {
    tickOAU: (state) => {
      state.offersAndUpdates.push(1);
    },
    unTickOAU: (state) => {
      state.offersAndUpdates.push(0);
    },
    tickTextMessage: (state) => {
      state.textMessage.push(1);
    },
    unTickTextMessage: (state) => {
      state.textMessage.push(0);
    },
    setRandomTextMessage: (state, action) => {
      state.textMessage.push(action.payload);
    },
    tickEmail: (state) => {
      state.email.push(1);
    },
    unTickEmail: (state) => {
      state.email.push(0);
    },
    setRandomEmail: (state, action) => {
      state.email.push(action.payload);
    },
    tickTelephone: (state) => {
      state.telephone.push(1);
    },
    unTickTelephone: (state) => {
      state.telephone.push(0);
    },
    setRandomTelephone: (state, action) => {
      state.telephone.push(action.payload);
    },
    tickPost: (state) => {
      state.post.push(1);
    },
    unTickPost: (state) => {
      state.post.push(0);
    },
    setRandomPost: (state, action) => {
      state.post.push(action.payload);
    },
    tickSocialMedia: (state) => {
      state.socialMedia.push(1);
    },
    unTickSocialMedia: (state) => {
      state.socialMedia.push(0);
    },
    setRandomSocialMedia: (state, action) => {
      state.socialMedia.push(action.payload);
    },
  },
});

export const {
  tickOAU,
  unTickOAU,
  tickTextMessage,
  unTickTextMessage,
  setRandomTextMessage,
  tickEmail,
  unTickEmail,
  setRandomEmail,
  tickTelephone,
  unTickTelephone,
  setRandomTelephone,
  tickPost,
  unTickPost,
  setRandomPost,
  tickSocialMedia,
  unTickSocialMedia,
  setRandomSocialMedia,
} = marketingPreferencesSlice.actions;

export default marketingPreferencesSlice.reducer;
