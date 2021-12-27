import React from "react";
import { UtilityTableLabels } from "../constants";
import { UtilityStateUnit } from "../types";

import { CustomIcon } from "../../../shared-components";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

import classNames from "classnames";
import styles from "./UtilityCard.module.scss";

interface Props {
    onClick: () => void;
    onPayedClick: () => void;
    onDelete: () => void;
    onEdit: () => void;
    dark?: boolean;
    unit: UtilityStateUnit;
}

const UtilityCard: React.FC<Props> = ({
    onClick,
    onPayedClick,
    onDelete,
    onEdit,
    dark = false,
    unit,
}) => {
    const { readDate, index, consumption, bill, payed, selected } = unit;
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });
    const dataWrapper = classNames(styles.data, {
        [styles.data__dark]: dark,
    });

    const icons = [
        {
            onClick: onPayedClick,
            title: payed
                ? UtilityTableLabels.PAYED
                : UtilityTableLabels.NOT_PAYED,
            icon: payed ? <FaCheck /> : <CgDanger />,
        },
        {
            onClick: onDelete,
            title: UtilityTableLabels.DELETE,
            icon: <FaRegTrashAlt />,
        },
        {
            onClick: onEdit,
            title: UtilityTableLabels.EDIT,
            icon: <MdEdit />,
        },
    ];

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
            <div className={dataWrapper}>
                {icons.map(icon => (
                    <CustomIcon key={icon.title} {...icon} />
                ))}
            </div>
        </div>
    );
};

export default UtilityCard;
