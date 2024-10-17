import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";

export const bubblesOpenSelector = (state: RootState) => state.app.bubblesOpen;
export const liftOpenSelector = (state: RootState) => state.app.liftOpen;
export const photosOpenSelector = (state: RootState) => state.app.photosOpen;
export const utilsOpenSelector = (state: RootState) => state.app.utilsOpen;
export const darkModeSelector = (state: RootState) => state.app.darkMode;

export const useAppRedux = () => ({
  isBubblesOpen: useSelector(bubblesOpenSelector),
  isLiftOpen: useSelector(liftOpenSelector),
  isPhotosOpen: useSelector(photosOpenSelector),
  isUtilsOpen: useSelector(utilsOpenSelector),
  isDarkMode: useSelector(darkModeSelector),
  dispatch: useDispatch(),
});
