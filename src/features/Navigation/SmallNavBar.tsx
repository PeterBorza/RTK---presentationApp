import React from "react";
import { NavLink } from "react-router-dom";

import { urlToLabel, AppMessages } from "app";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { NavProps } from "./Navigation";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styledLinks, active, nav__dropdown } = styles;

const SmallNavBar = ({ links }: NavProps) => {
    const linkClasses = (isActive: boolean) =>
        classNames(styledLinks, {
            [active]: isActive,
        });
    return (
        <div className={nav__dropdown}>
            <DropdownContainer reset={false} label={AppMessages.OPEN_MENU}>
                {links.map(item => (
                    <Dropdown.MenuItem key={`navigation-link-${item}`}>
                        <NavLink className={({ isActive }) => linkClasses(isActive)} to={item}>
                            {urlToLabel(item)}
                        </NavLink>
                    </Dropdown.MenuItem>
                ))}
            </DropdownContainer>
        </div>
    );
};

export default SmallNavBar;
