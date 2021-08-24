import { createSlice } from "@reduxjs/toolkit";

export interface PersonalDetailsState {
  title: string;
  nationality: string;
}

const initialState: PersonalDetailsState = {
  title: "",
  nationality: "",
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
  },
});

export const { saveTitle, saveNationality } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
