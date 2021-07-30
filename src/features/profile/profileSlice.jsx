import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bob",
  age: 23,
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
});

export const { addYearToAge, decreaseYearFromAge, changeByAmount, changeName } =
  profileSlice.actions;

export default profileSlice.reducer;
