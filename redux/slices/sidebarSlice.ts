import { SidebarState } from "@/types/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  mainSidebar: false,
  categorySidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<keyof SidebarState>) => {
      const sidebar = action.payload;
      state[sidebar] = !state[sidebar];
    },
    closeAllSidebars: (state) => {
      state.mainSidebar = false;
      state.categorySidebar = false;
    },
  },
});

export const { toggleSidebar, closeAllSidebars } = sidebarSlice.actions;
export default sidebarSlice.reducer;
