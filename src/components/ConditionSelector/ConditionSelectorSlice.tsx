import { createSlice } from "@reduxjs/toolkit";

export interface ConditionSelectorState {
  efsCondition: any;
}

const initialState: ConditionSelectorState = {
  efsCondition: -77,
};

export const conditionSelectorSlice = createSlice({
  name: "conditionSelector",
  initialState,
  reducers: {
    saveCondition: (state, action: any) => {
      state.efsCondition = action.payload;
    },
  },
});

export const { saveCondition } = conditionSelectorSlice.actions;

export default conditionSelectorSlice.reducer;
