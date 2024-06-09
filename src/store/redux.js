import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { stepNumber: 0 };

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep(state) {
      state.stepNumber++;
    },
    prevStep(state) {
      state.stepNumber--;
    },
  },
});

export const stepActions = stepSlice.actions;
export const store = configureStore({
  reducer: stepSlice.reducer,
});
