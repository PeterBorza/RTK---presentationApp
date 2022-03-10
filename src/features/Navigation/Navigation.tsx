import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { NavBar, ToggleButton } from "../../shared-components";
import { LinkContext } from "../../context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";
import { utilsOpenSelector, darkModeSelector, photosOpenSelector, toggleDarkMode } from "../../app";

const { links: styleLinks, active } = styles;

const Navigation = () => {
    const links = useContext(LinkContext);
    const utilsOpen = useSelector(utilsOpenSelector);
    const photosOpen = useSelector(photosOpenSelector);
    const darkMode = useSelector(darkModeSelector);
    const dispatch = useDispatch();

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const containerClasses = classNames(styles.nav_container, {
        // [styles["nav_container__sidebar-open"]]: utilsOpen || photosOpen,
    });

    const renderBody = links?.map(item => (
        <li key={item.id}>
            <NavLink className={({ isActive }) => linkClasses(isActive)} to={item.to}>
                {item.label}
            </NavLink>
        </li>
    ));

    return (
        <div className={containerClasses}>
            <NavBar>
                {renderBody}
                <ToggleButton
                    selected={darkMode}
                    toggleSelected={() => dispatch(toggleDarkMode(!darkMode))}
                    size="large"
                />
            </NavBar>
        </div>
    );
};

export default Navigation;
