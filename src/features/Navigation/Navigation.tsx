import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { updateDarkMode, OpenMenu, getHomeLabel, useAppRedux } from "app";
import { ToggleButton } from "shared-components";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { useLocalStorage, useWindowSize } from "hooks";
import { useLinkContext } from "context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styleLinks, active, nav__dropdown } = styles;

const Navigation = () => {
    const { links } = useLinkContext();
    const { dispatch, isDarkMode } = useAppRedux();

    const ref = useRef<HTMLDivElement | null>(null);
    const SMALL_SCREEN = useWindowSize(ref, 600);

    const [isDark, setIsDark] = useLocalStorage<boolean>("lightMode", true);

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    <ToggleButton
        variant="darkMode"
        enabled={!isDarkMode}
        toggleEnabled={() => setIsDark(!isDark)}
    />;

    useEffect(() => {
        dispatch(updateDarkMode(Boolean(isDark)));
    }, [dispatch, isDark, isDarkMode]);

    const RenderBigScreenLinks = () => (
        <>
            {links.map(item => (
                <li key={`navigation-link-${item}`}>
                    <NavLink className={({ isActive }) => linkClasses(isActive)} to={item}>
                        {getHomeLabel(item)}
                    </NavLink>
                </li>
            ))}
            <ToggleButton
                variant="darkMode"
                enabled={!isDarkMode}
                toggleEnabled={() => setIsDark(!isDark)}
            />
        </>
    );

    const RenderSmallScreenLinks = () => (
        <>
            <ToggleButton
                variant="darkMode"
                enabled={!isDarkMode}
                toggleEnabled={() => setIsDark(!isDark)}
            />
            <div className={nav__dropdown}>
                <DropdownContainer reset={false} label={OpenMenu.MESSAGE}>
                    {links.map(item => (
                        <Dropdown.MenuItem key={`navigation-link-${item}`}>
                            <NavLink className={({ isActive }) => linkClasses(isActive)} to={item}>
                                {getHomeLabel(item)}
                            </NavLink>
                        </Dropdown.MenuItem>
                    ))}
                </DropdownContainer>
            </div>
        </>
    );

    return (
        <div ref={ref} className={styles.nav}>
            <ul className={styles.list}>
                {SMALL_SCREEN ? <RenderSmallScreenLinks /> : <RenderBigScreenLinks />}
            </ul>
        </div>
    );
};

export default Navigation;
