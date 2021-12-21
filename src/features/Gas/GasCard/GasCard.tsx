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
    ...units
}) => {
    const { readDate, index, consumption, bill, payed, selected, edit } = units;
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
                {readDate}
            </div>
            <div className={dataWrapper} title={index}>
                {index}
            </div>
            <div className={dataWrapper} title={consumption}>
                {consumption}
            </div>
            <div className={dataWrapper} title={bill}>
                {bill}
            </div>
            <IconSet
                onCheck={onPayedClick}
                onDelete={onDelete}
                onEdit={onEdit}
                isChecked={payed}
                isEdited={edit}
            />
        </div>
    );
};

export default GasCard;
