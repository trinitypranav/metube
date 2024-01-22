import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: function (state) {
      console.log("called");
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: function (state) {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
