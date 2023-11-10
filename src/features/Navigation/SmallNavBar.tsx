import { NavLink } from "react-router-dom";

import { urlToLabel, AppMessages } from "app";
import { AnimatedDropdown } from "shared-components";

import { NavProps } from "./Navigation";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const { links: styledLinks, active, nav__dropdown } = styles;

const SmallNavBar = ({ links }: NavProps) => {
    const linkClasses = (isActive: boolean) =>
        classNames(styledLinks, {
            [active]: isActive,
        });

    const menuItems = links.map((item, idx) => (
        <NavLink key={idx} className={({ isActive }) => linkClasses(isActive)} to={item}>
            {urlToLabel(item)}
        </NavLink>
    ));
    return (
        <div className={nav__dropdown}>
            <AnimatedDropdown label={AppMessages.OPEN_MENU} items={menuItems} />
        </div>
    );
};

export default SmallNavBar;
