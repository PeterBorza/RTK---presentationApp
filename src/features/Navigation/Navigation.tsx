import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { NavBar, ToggleButton } from "shared-components";
import { useLocalStorage, useWindowSize } from "hooks";
import { toggleDarkMode, OpenMenu, getHomeLabel } from "app";
import { useLinkContext } from "context";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styleLinks, active, nav__dropdown } = styles;

const Navigation = () => {
    const links = useLinkContext();
    const { width } = useWindowSize();
    const [isDark, setIsDark] = useLocalStorage("lightMode", false);
    const dispatch = useDispatch();

    const SMALL_SCREEN = width < 600;

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const toggleSelected = () => {
        setIsDark(!isDark);
    };

    const toggleButton = (
        <ToggleButton selected={!Boolean(isDark)} toggleSelected={toggleSelected} size="large" />
    );

    useEffect(() => {
        dispatch(toggleDarkMode(Boolean(isDark)));
    }, [isDark]);

    const RenderBigScreenLinks = () => (
        <>
            {links.map(item => (
                <li key={`navigation-link-${item}`}>
                    <NavLink className={({ isActive }) => linkClasses(isActive)} to={item}>
                        {getHomeLabel(item)}
                    </NavLink>
                </li>
            ))}
            {toggleButton}
        </>
    );

    const RenderSmallScreenLinks = () => (
        <>
            {toggleButton}
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
            <NavBar>{SMALL_SCREEN ? <RenderSmallScreenLinks /> : <RenderBigScreenLinks />}</NavBar>
        </div>
    );
};

export default Navigation;
