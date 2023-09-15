// store.tsx
import sideBarSlice from "@/reducers/slices/sideBarSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  sideBarEvent: sideBarSlice,
  // Thêm reducers khác nếu cần
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
