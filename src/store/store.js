import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";
import searchCache from "./slices/searchCacheSlice";

const store = configureStore({
  reducer: {
    app: app,
    searchCache: searchCache,
  },
});

export default store;
