import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = Record<string, boolean>;

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
        toggleBubbles: (state: AppState, { payload }: PayloadAction<boolean>) => {
            state.bubblesOpen = payload;
        },
        toggleDarkMode: (state: AppState, { payload }: PayloadAction<boolean>) => {
            state.darkMode = payload;
        },
    },
});

export const { toggleBuilding, togglePhotos, toggleUtils, toggleBubbles, toggleDarkMode } =
    appSlice.actions;

export default appSlice.reducer;
