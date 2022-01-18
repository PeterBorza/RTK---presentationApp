import { FC } from "react";

import classNames from "classnames";
import styles from "./UtilityTable.module.scss";

const UtilityTable: FC<{ dark?: boolean }> = ({ dark = false, children }) => {
    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    return <div className={wrapper}>{children}</div>;
};

export default UtilityTable;
