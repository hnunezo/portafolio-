import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../state/formSlice";

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
