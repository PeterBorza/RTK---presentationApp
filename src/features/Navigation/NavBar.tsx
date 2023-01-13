import React from "react";
import { NavLink } from "react-router-dom";

import { urlToLabel } from "app";
import { NavProps } from "./Navigation";

import styles from "./Navigation.module.scss";

const { links: styledLinks, active } = styles;

const NavBar = ({ links }: NavProps) => {
    return (
        <>
            {links.map(item => (
                <li key={`navigation-link-${item}`}>
                    <NavLink
                        className={({ isActive }) => (isActive ? active : undefined)}
                        to={item}
                    >
                        <span className={styledLinks}>{urlToLabel(item)}</span>
                    </NavLink>
                </li>
            ))}
        </>
    );
};

export default NavBar;
