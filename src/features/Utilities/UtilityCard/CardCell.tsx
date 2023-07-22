import React, { ReactNode } from "react";

import classNames from "classnames";
import styles from "./UtilityCard.module.scss";

type CardCellType = {
    dark?: boolean;
    title?: string | undefined;
    content: string | ReactNode;
};

const CardCell = ({ dark = false, title, content }: CardCellType) => {
    const dataWrapper = classNames(styles.data, {
        [styles.data__dark]: dark,
    });

    return (
        <div className={dataWrapper} title={title}>
            {typeof content === "string" ? (
                <p>{content}</p>
            ) : (
                <div className={styles.tableIcons}>{content}</div>
            )}
        </div>
    );
};

export default CardCell;
