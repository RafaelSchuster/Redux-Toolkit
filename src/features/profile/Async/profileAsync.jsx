import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "../errorSlice";

const myPromise = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve({
      status: 200,
      json: { name: "Billy", error: "error", message: "error-msg" },
    });
  }, 6000);
});

export const profileAsync = createAsyncThunk(
  "profile/first",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await myPromise;
      if (res.status !== 200 || res.json.error) {
        throw new Error(res.json.message);
      } else {
        return res.json;
      }
    } catch (err) {
      dispatch(setError("Big error"));
      return rejectWithValue(err.message);
    }
  }
);
