import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import errorReducer from "../features/profile/errorSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    error: errorReducer,
  },
});
