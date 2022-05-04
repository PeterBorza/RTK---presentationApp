import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { NavBar, ToggleButton } from "shared-components";
import { LinkContext } from "context";
import { useWindowSize } from "hooks";
import { icons } from "utils";
import { utilsOpenSelector, darkModeSelector, photosOpenSelector, toggleDarkMode } from "app";
import { IProviderProps } from "context/link-context";
import { DropdownContainer } from "shared-components/Dropdown";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styleLinks, active, nav__dropdown } = styles;

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const links = useContext(LinkContext);
    const utilsOpen = useSelector(utilsOpenSelector);
    const photosOpen = useSelector(photosOpenSelector);
    const darkMode = useSelector(darkModeSelector);
    const { width } = useWindowSize();
    const dispatch = useDispatch();

    const SMALL_SCREEN = width < 600;

    useEffect(() => {
        !SMALL_SCREEN && setOpenMenu(false);
    }, [SMALL_SCREEN]);

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const containerClasses = classNames(styles.nav, {
        [styles["nav__sidebar-closed"]]: !utilsOpen || !photosOpen,
    });

    const renderMenuItems = links?.map(item => (
        <li key={item.id}>
            <NavLink className={({ isActive }) => linkClasses(isActive)} to={item.to}>
                {item.label}
            </NavLink>
        </li>
    ));

    const renderLinkItem = (item: IProviderProps) => {
        return (
            <NavLink className={({ isActive }) => linkClasses(isActive)} to={item.to}>
                {item.label}
            </NavLink>
        );
    };

    return (
        <div className={containerClasses}>
            <NavBar>
                {!SMALL_SCREEN ? (
                    <>
                        {renderMenuItems}
                        <ToggleButton
                            selected={darkMode}
                            toggleSelected={() => dispatch(toggleDarkMode(!darkMode))}
                            size="large"
                        />
                    </>
                ) : (
                    <div className={nav__dropdown}>
                        <DropdownContainer
                            menuList={links}
                            renderMenuItem={item => renderLinkItem(item)}
                            label="Explore"
                        />
                    </div>
                )}
            </NavBar>
        </div>
    );
};

export default Navigation;
