import { createSlice } from "@reduxjs/toolkit";
import { profileAsync } from "./Async/profileAsync";

const initialState = {
  name: "Bob",
  age: 23,
  car: "Subaru",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addYearToAge: (state) => {
      state.age += 1;
    },
    decreaseYearFromAge: (state) => {
      state.age -= 1;
    },
    changeByAmount: (state, action) => {
      state.age += action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: {
    [profileAsync.pending]: (state) => {
      state.car = "Volvo";
    },
    [profileAsync.fulfilled]: (state) => {
      state.car = "BMW";
    },
    [profileAsync.rejected]: (state) => {
      state.car = "Ford";
    },
  },
});

export const { addYearToAge, decreaseYearFromAge, changeByAmount, changeName } =
  profileSlice.actions;

export default profileSlice.reducer;
