import { useEffect, useRef } from "react";

import { updateDarkMode, useAppRedux } from "app";
import { useLocalStorage, useWindowSize } from "hooks";
import { LocalStorageKeys } from "common/localStorageKeys";
import { ToggleButton } from "shared-components";

import SmallNavBar from "./SmallNavBar";
import NavBar from "./NavBar";

import styles from "./Navigation.module.scss";

import { appInternalLinks } from "providers";
export interface NavProps {
  links: typeof appInternalLinks;
}

// TODO useWindowSize is not working. Why? was adding ref as param a good idea?

const Navigation = () => {
  const { dispatch, isDarkMode } = useAppRedux();

  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const SMALL_SCREEN = width < 550;

  const [isDark, setIsDark] = useLocalStorage<boolean>(LocalStorageKeys.DARK_MODE, isDarkMode);

  useEffect(() => {
    dispatch(updateDarkMode(Boolean(isDark)));
  }, [dispatch, isDark, isDarkMode]);

  return (
    <nav ref={ref} className={styles.nav}>
      {!SMALL_SCREEN ? (
        <ul className={styles.list}>
          <NavBar links={appInternalLinks} />
        </ul>
      ) : (
        <SmallNavBar links={appInternalLinks} />
      )}
      <ToggleButton
        variant="darkMode"
        enabled={!isDarkMode}
        toggleEnabled={() => setIsDark(!isDark)}
        darkMode={isDarkMode}
      />
    </nav>
  );
};

export default Navigation;
