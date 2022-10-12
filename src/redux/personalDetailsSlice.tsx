import { createSlice } from "@reduxjs/toolkit";

export interface PersonalDetailsState {
  title: string;
  nationality: string;
  address: string;
}

const initialState: PersonalDetailsState = {
  title: "",
  nationality: "",
  address: "",
};

export const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
    saveNationality: (state, action) => {
      state.nationality = action.payload;
    },
    saveAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  saveTitle,
  saveNationality,
  saveAddress,
} = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
