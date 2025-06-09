import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../localStorage";
if (typeof window !== "undefined") window.localStorage.getItem("plan");
const saveState = (key, state) => {
  try {
    // const serializedState = JSON.stringify(state);
    localStorage.setItem(key, state);
  } catch (err) {
    // console.error(err);
  }
};

const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (err) {
    return null;
  }
};
const initialState = {
  generateData: loadState("generateData"),
  plan: loadState("plan"),
  user: {},
};
const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setItem("user", action.payload);
    },
    generatedFormData: (state, action) => {
      state.generateData = action.payload;
      setItem("generateData", action.payload);
    },
  },
});

export const { setUser, generatedFormData } = Slice.actions;

export default Slice.reducer;
