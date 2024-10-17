import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = { [key: string]: boolean };

export const initialState: AppState = {
  liftOpen: false,
  bubblesOpen: false,
  utilsOpen: false,
  photosOpen: false,
  darkMode: false,
  //TODO extract darkMode to separate context on router outlet prop in App.tsx
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleBuilding: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.liftOpen = payload;
    },
    togglePhotos: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.photosOpen = payload;
    },
    toggleUtils: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.utilsOpen = payload;
    },
    updateBubbles: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.bubblesOpen = payload;
    },
    updateDarkMode: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.darkMode = payload;
    },
  },
});

export const { toggleBuilding, togglePhotos, toggleUtils, updateBubbles, updateDarkMode } =
  appSlice.actions;

export default appSlice.reducer;
