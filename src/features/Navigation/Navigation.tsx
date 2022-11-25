import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { NavBar, ToggleButton } from "shared-components";
import { LinkContext } from "context";
import { useWindowSize } from "hooks";
import { toggleDarkMode, OpenMenu, useAppRedux } from "app";
import { IProviderProps } from "context/link-context";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styleLinks, active, nav__dropdown } = styles;

const Navigation = () => {
    const links = useContext(LinkContext);
    const { isUtilsOpen, isPhotosOpen, isDarkMode, dispatch } = useAppRedux();
    const { width } = useWindowSize();

    const SMALL_SCREEN = width < 600;

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const containerClasses = classNames(styles.nav, {
        [styles["nav__sidebar-closed"]]: !isUtilsOpen || !isPhotosOpen,
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
            <Dropdown.MenuItem key={`navigation-link-${item.id}`}>
                <NavLink className={({ isActive }) => linkClasses(isActive)} to={item.to}>
                    {item.label}
                </NavLink>
            </Dropdown.MenuItem>
        );
    };

    return (
        <div className={containerClasses}>
            <NavBar>
                {!SMALL_SCREEN ? (
                    <>
                        {renderMenuItems}
                        <ToggleButton
                            selected={isDarkMode}
                            toggleSelected={() => dispatch(toggleDarkMode(!isDarkMode))}
                            size="large"
                        />
                    </>
                ) : (
                    <div className={nav__dropdown}>
                        <DropdownContainer reset={false} label={OpenMenu.MESSAGE}>
                            {links.map(renderLinkItem)}
                        </DropdownContainer>
                    </div>
                )}
            </NavBar>
        </div>
    );
};

export default Navigation;
