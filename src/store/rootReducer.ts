import { combineReducers } from "@reduxjs/toolkit";
import status from "./Slices/status";

const reducer = combineReducers({
  status,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
