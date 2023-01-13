import React, { ReactNode, useEffect, useRef } from "react";

import { NavLinkUrls, updateDarkMode, useAppRedux } from "app";
import { useLocalStorage, useWindowSize } from "hooks";
import { useLinkContext } from "context";
import { ToggleButton } from "shared-components";

import SmallNavBar from "./SmallNavBar";
import NavBar from "./NavBar";

import styles from "./Navigation.module.scss";

export interface NavProps {
    links: NavLinkUrls[];
}

// TODO useWindowSize is not working. Why? was adding ref as param a good idea?

const Navigation = () => {
    const { links } = useLinkContext();
    const { dispatch, isDarkMode } = useAppRedux();

    const ref = useRef<HTMLDivElement | null>(null);
    const SMALL_SCREEN = useWindowSize(ref, 600);

    const [isDark, setIsDark] = useLocalStorage<boolean>("lightMode", true);

    const navBarProps: NavProps = { links };

    useEffect(() => {
        dispatch(updateDarkMode(Boolean(isDark)));
    }, [dispatch, isDark, isDarkMode]);

    return (
        <div ref={ref} className={styles.nav}>
            <ul className={styles.list}>
                {SMALL_SCREEN ? <SmallNavBar {...navBarProps} /> : <NavBar {...navBarProps} />}
            </ul>
            <ToggleButton
                variant="darkMode"
                enabled={!isDarkMode}
                toggleEnabled={() => setIsDark(!isDark)}
                darkMode={isDarkMode}
            />
        </div>
    );
};

export default Navigation;
