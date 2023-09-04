import {NavType, navData} from "@/data/maindata";
import {createSlice} from "@reduxjs/toolkit";

interface InitialTypes {
  isSubNavOpen: boolean;
  navData: NavType[];
}
const initialState: InitialTypes = {
  isSubNavOpen: false,
  navData,
};
export const AppSlice = createSlice({
  name: "APP",
  initialState,
  reducers: {
    setSubNavOpen: (state) => {
      state.isSubNavOpen = !state.isSubNavOpen;
    },
    closeSubNavOpen: (state) => {
      state.isSubNavOpen = false;
    },
    setNavData: (state, {payload}) => {
      const x = state.navData.map((navItem) => {
        return payload.id === navItem.id
          ? {...navItem, state: true}
          : {...navItem, state: false};
      });
      state.navData = x;
    },
  },
});

export const {setSubNavOpen, closeSubNavOpen, setNavData} = AppSlice.actions;
export default AppSlice.reducer;
