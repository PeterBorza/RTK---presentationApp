import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { NavBar, ToggleButton } from "../../shared-components";
import { LinkContext } from "../../context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";
import { darkModeSelector, toggleDarkMode } from "../../app";

const { links: styleLinks, active, nav_container } = styles;

const Navigation = () => {
    const links = useContext(LinkContext);
    const darkMode = useSelector(darkModeSelector);
    const dispatch = useDispatch();

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const renderBody = links?.map(item => (
        <li key={item.id}>
            <NavLink
                className={({ isActive }) => linkClasses(isActive)}
                to={item.to}
            >
                {item.label}
            </NavLink>
        </li>
    ));

    return (
        <div className={nav_container}>
            <NavBar>{renderBody}</NavBar>
            <ToggleButton
                selected={darkMode}
                toggleSelected={() => dispatch(toggleDarkMode(!darkMode))}
                size="large"
            />
        </div>
    );
};

export default Navigation;
