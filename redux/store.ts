import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./slices/dropdownSlice";
import modalReducer from "./slices/modalSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    dropdown: dropdownReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
