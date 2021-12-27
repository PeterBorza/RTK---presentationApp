import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { NavBar } from "../../shared-components";
import { LinkContext } from "../../context";

import classNames from "classnames";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    const links = useContext(LinkContext);

    const linkClasses = (isActive: boolean) =>
        classNames(styles.links, {
            [styles.active]: isActive,
            [styles.inActive]: !isActive,
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
        <div className={styles.container}>
            <NavBar>{renderBody}</NavBar>
        </div>
    );
};

export default Navigation;