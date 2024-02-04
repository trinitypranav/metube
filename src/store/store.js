import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";
import searchCache from "./slices/searchCacheSlice";
import darkSlice from "./slices/darkSlice";

const store = configureStore({
  reducer: {
    app: app,
    searchCache: searchCache,
    dark:darkSlice
  },
});

export default store;
