import { FC } from "react";

import classNames from "classnames";
import styles from "./UtilityTable.module.scss";

const UtilityTable: FC<{ dark?: boolean }> = ({ dark = false, children }) => {
    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    return <div className={wrapper}>{children}</div>;
};

// TODO extract MANAGE to header near ADD NEW INDEX and pass selected list item
// this way you gain horizontal space in table
// also sorting should be available here or near titles

export default UtilityTable;
