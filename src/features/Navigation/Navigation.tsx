import { FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { NavBar, SimpleDrop, ToggleButton } from "../../shared-components";
import { LinkContext } from "../../context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";
import { darkModeSelector, toggleDarkMode } from "../../app";
import { useWindowSize } from "../../hooks";

const { links: styleLinks, active, nav_container } = styles;

const Navigation: FC = () => {
    const { width } = useWindowSize();
    const links = useContext(LinkContext);
    const darkMode = useSelector(darkModeSelector);
    const dispatch = useDispatch();

    const SMALL_SCREEN = width < 600;

    const linkClasses = (isActive: boolean) =>
        classNames(styleLinks, {
            [active]: isActive,
        });

    const navClass = classNames(SMALL_SCREEN ? styles.nav_container__smallScreen : nav_container);

    const renderBody = links?.map(item => (
        <li key={item.id}>
            <NavLink className={({ isActive }) => linkClasses(isActive)} to={item.to}>
                {item.label}
            </NavLink>
        </li>
    ));

    const renderNavBar = (vertical: boolean) => (
        <>
            <NavBar vertical={vertical}>{renderBody}</NavBar>
            <ToggleButton
                selected={darkMode}
                toggleSelected={() => dispatch(toggleDarkMode(!darkMode))}
                size="large"
            />
        </>
    );

    return (
        <div className={navClass}>
            {!SMALL_SCREEN ? (
                renderNavBar(false)
            ) : (
                <SimpleDrop title="Menu" height="large" contentStyle={styles.navBarDrop}>
                    {renderNavBar(true)}
                </SimpleDrop>
            )}
        </div>
    );
};

export default Navigation;
