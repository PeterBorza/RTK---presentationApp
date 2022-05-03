import React from "react";

import classNames from "classnames";
import styles from "../Dropdown.module.scss";
import { DropdownContext } from "../context";

export type DropdownPositionType = "top" | "right" | "bottom" | "left";

type DropdownListType = {
    position: DropdownPositionType;
};

const DropdownList: React.FC<DropdownListType> = ({ position, children }) => {
    const { isOpen } = React.useContext(DropdownContext);
    const classes = classNames(
        styles.drop_content,
        styles.drop_content__animated,
        styles[`drop_content__${position}`],
    );
    return isOpen ? (
        <div className={classes}>
            <ul>{children}</ul>
        </div>
    ) : null;
};

export default DropdownList;
