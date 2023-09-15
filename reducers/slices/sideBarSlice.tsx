// sideBarSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface StatusSideBar {
  isOpenSideBar: boolean;
}

const initialState: StatusSideBar = {
  isOpenSideBar: false,
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar; // Đảo ngược giá trị
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export const selectIsSideBarOpen = (state: { sideBarEvent: StatusSideBar }) =>
  state.sideBarEvent.isOpenSideBar;
export default sideBarSlice.reducer;
