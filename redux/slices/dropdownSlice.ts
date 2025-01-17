import { DropdownState } from "@/types/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DropdownState = {
  openDropdown: null,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<string>) => {
      if (state.openDropdown === action.payload) {
        state.openDropdown = null;
      } else {
        state.openDropdown = action.payload;
      }
    },
  },
});

export const { toggleDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
