import { createSlice } from "@reduxjs/toolkit";

export interface ProductChoiceState {
  choice: string[];
}

const initialState: ProductChoiceState = {
  choice: [""],
};

export const productChoiceSlice = createSlice({
  name: "productChoice",
  initialState,
  reducers: {
    selectChoice: (state, action) => {
      state.choice.push(action.payload);
    },
  },
});

export const { selectChoice } = productChoiceSlice.actions;

export default productChoiceSlice.reducer;
