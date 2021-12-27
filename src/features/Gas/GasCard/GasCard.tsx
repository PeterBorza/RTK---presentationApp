import React from "react";
import { UtilityStateUnit } from "../../Utilities";
import { IconSet } from "../../../shared-components";

import styles from "./GasCard.module.scss";
import classNames from "classnames";

interface Props {
    onClick: () => void;
    onPayedClick: () => void;
    onDelete: () => void;
    onEdit: () => void;
    dark?: boolean;
}

const GasCard: React.FC<UtilityStateUnit & Props> = ({
    onClick,
    onPayedClick,
    onDelete,
    onEdit,
    dark = false,
    ...unit
}) => {
    const { readDate, index, consumption, bill, payed, selected } = unit;
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });
    const dataWrapper = classNames(styles.data, {
        [styles.data__dark]: dark,
    });

    return (
        <div className={classes} onClick={onClick}>
            <div className={dataWrapper} title={readDate}>
                <p>{readDate}</p>
            </div>
            <div className={dataWrapper} title={index}>
                <p>{index}</p>
            </div>
            <div className={dataWrapper} title={consumption}>
                <p>{consumption}</p>
            </div>
            <div className={dataWrapper} title={bill}>
                <p>{bill}</p>
            </div>
            <IconSet
                onCheck={onPayedClick}
                onDelete={onDelete}
                onEdit={onEdit}
                isChecked={payed}
            />
        </div>
    );
};

export default GasCard;
