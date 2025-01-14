import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./slices/dropdownSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    dropdown: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
