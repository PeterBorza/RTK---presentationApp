import React from "react";
import { UtilityStateUnit } from "../../Utilities";
import { IconSet } from "../../../shared-components";

import styles from "./LightCard.module.scss";
import classNames from "classnames";

interface Props {
    onClick: () => void;
    onPayedClick: () => void;
    onDelete: () => void;
    onEdit: () => void;
    dark?: boolean;
}

const LightCard: React.FC<UtilityStateUnit & Props> = ({
    onClick,
    onPayedClick,
    onDelete,
    onEdit,
    dark = false,
    ...units
}) => {
    const { readDate, index, consumption, bill, payed, selected } = units;
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });
    const dataWrapper = classNames(styles.data, {
        [styles.data__dark]: dark,
    });
    const iconsWrapper = classNames(styles.iconBox, {
        [styles.iconBox__dark]: dark,
    });

    return (
        <div className={classes} onClick={onClick}>
            <div className={dataWrapper}>{readDate}</div>
            <div className={dataWrapper}>{index}</div>
            <div className={dataWrapper}>{consumption}</div>
            <div className={dataWrapper}>{bill}</div>
            <div className={iconsWrapper}>
                <IconSet
                    onCheck={onPayedClick}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    isChecked={payed}
                />
            </div>
        </div>
    );
};

export default LightCard;
