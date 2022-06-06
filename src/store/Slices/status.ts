import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Status {
  name: string;
}

const status = createSlice({
  name: "status",
  initialState: {
    status: "sleeping",
  },
  reducers: {
    changeStatus(state, action: PayloadAction<string>) {
      return { ...state, status: action.payload };
    },
  },
});

export const { changeStatus } = status.actions;
export default status.reducer;
