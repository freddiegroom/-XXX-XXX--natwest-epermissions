import { createSlice } from "@reduxjs/toolkit";

export interface InLifeState {}

const initialState: InLifeState = {};

export const InLifeSlice = createSlice({
  name: "inLife",
  initialState,
  reducers: {},
});

export const {} = InLifeSlice.actions;

export default InLifeSlice.reducer;
