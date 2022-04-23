import React from "react";

import classNames from "classnames";
import styles from "../Dropdown.module.scss";

type DropdownListType = {
    isOpen: boolean;
    position: "top" | "right" | "bottom" | "left";
};

const DropdownList: React.FC<DropdownListType> = ({ isOpen, position, children }) => {
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
