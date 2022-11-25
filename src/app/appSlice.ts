import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppStateInterface {
    liftOpen: boolean;
    bubblesOpen: boolean;
    utilsOpen: boolean;
    photosOpen: boolean;
    darkMode: boolean;
}

export const initialState: AppStateInterface = {
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
        toggleBuilding: (state: AppStateInterface, { payload }: PayloadAction<boolean>) => {
            state.liftOpen = payload;
        },
        togglePhotos: (state: AppStateInterface, { payload }: PayloadAction<boolean>) => {
            state.photosOpen = payload;
        },
        toggleUtils: (state: AppStateInterface, { payload }: PayloadAction<boolean>) => {
            state.utilsOpen = payload;
        },
        toggleBubbles: (state: AppStateInterface, { payload }: PayloadAction<boolean>) => {
            state.bubblesOpen = payload;
        },
        toggleDarkMode: (state: AppStateInterface, { payload }: PayloadAction<boolean>) => {
            state.darkMode = payload;
        },
    },
});

export const { toggleBuilding, togglePhotos, toggleUtils, toggleBubbles, toggleDarkMode } =
    appSlice.actions;

export default appSlice.reducer;
