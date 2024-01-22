import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";

const store = configureStore({
  reducer: {
    app: app,
  },
});

export default store;
