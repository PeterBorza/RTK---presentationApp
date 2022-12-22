import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { toggleDarkMode, OpenMenu, getHomeLabel, useAppRedux } from "app";
import { ToggleButton } from "shared-components";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { useLocalStorage, useWindowSize } from "hooks";
import { useLinkContext } from "context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styleLinks, active, nav__dropdown } = styles;

const Navigation = () => {
    const links = useLinkContext();
    const { width } = useWindowSize();
    const { dispatch, isDarkMode } = useAppRedux();
    const [isDark, setIsDark] = useLocalStorage<boolean>("lightMode", true);

    const SMALL_SCREEN = width < 600;

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const toggleSelected = () => {
        setIsDark(!isDark);
    };

    const Toggle = () => (
        <li>
            <ToggleButton variant="darkMode" enabled={!isDarkMode} toggleEnabled={toggleSelected} />
        </li>
    );

    useEffect(() => {
        dispatch(toggleDarkMode(Boolean(isDark)));
    }, [dispatch, isDark]);

    const RenderBigScreenLinks = () => (
        <>
            {links.map(item => (
                <li key={`navigation-link-${item}`}>
                    <NavLink className={({ isActive }) => linkClasses(isActive)} to={item}>
                        {getHomeLabel(item)}
                    </NavLink>
                </li>
            ))}
            <Toggle />
        </>
    );

    const RenderSmallScreenLinks = () => (
        <>
            <Toggle />
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
        <div className={styles.nav}>
            <ul className={styles.list}>
                {SMALL_SCREEN ? <RenderSmallScreenLinks /> : <RenderBigScreenLinks />}
            </ul>
        </div>
    );
};

export default Navigation;
