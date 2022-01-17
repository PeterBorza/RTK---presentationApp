import { FC, ReactNode } from "react";

import classNames from "classnames";
import styles from "./UtilityTable.module.scss";

type Props = {
    tableTitle: string;
    tableHeader: () => ReactNode;
    tableBody: () => ReactNode;
    tableFooter: () => ReactNode;
    dark?: boolean;
};

const UtilityTable: FC<Props> = ({
    tableTitle,
    tableHeader,
    tableBody,
    tableFooter,
    dark = false,
}) => {
    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    const titleClasses = classNames(styles.title, {
        [styles.title__dark]: dark,
    });

    return (
        <div className={wrapper}>
            <div className={styles.tableHeader}>
                <h1 className={titleClasses}>{tableTitle}</h1>
                {tableHeader()}
            </div>
            <div className={styles.tableBody}>{tableBody()}</div>
            <div className={styles.tableFooter}>{tableFooter()}</div>
        </div>
    );
};

export default UtilityTable;
