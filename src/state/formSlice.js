import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  mail: "",
  message: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    reset: () => initialState,
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { reset, setUsername, setMessage, setMail } = formSlice.actions;

export default formSlice.reducer;
