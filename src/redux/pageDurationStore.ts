import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IncrementDurationPayloadType {
  id: string;
  duration: number;
}

const initialState: { [key: string]: number } = {};

const pageDurationStoreSlice = createSlice({
  name: "pageDurationStore",
  initialState: initialState,
  reducers: {
    incrementDuration(
      state,
      action: PayloadAction<IncrementDurationPayloadType>
    ) {
      const { id, duration } = action.payload;

      if (Object.prototype.hasOwnProperty.call(state, id)) {
        state[id] = state[id] + duration;
      } else {
        state[id] = duration;
      }
    },
    resetDuration(state, action: PayloadAction<string>) {
      state[action.payload] = 0;
    },
  },
});

export const {
  incrementDuration,
  resetDuration,
} = pageDurationStoreSlice.actions;
export const { reducer: pageDurationStoreReducer } = pageDurationStoreSlice;

// Selectors

/**
 * Get all the page durations that are logged
 */
export const getPageDurations = (
  state: RootState
): { [key: string]: number } => {
  return Object.keys(state.pageDuration).reduce((output, id) => {
    return { ...output, [id]: Math.round(state.pageDuration[id] / 10) / 100 };
  }, {});
};
