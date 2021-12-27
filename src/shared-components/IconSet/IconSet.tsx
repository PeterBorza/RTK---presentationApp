import { FC } from "react";

import classNames from "classnames";
import styles from "./IconSet.module.scss";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

export enum IconTitles {
    PAYED = "Payed",
    DELETE = "Delete",
    EDIT = "Edit",
    NOT_PAYED = "Not payed",
}

interface IconSetProps {
    onCheck: () => void;
    onDelete: () => void;
    onEdit: () => void;
    isChecked: boolean;
    className?: string;
}

const IconSet: FC<IconSetProps> = ({
    onCheck,
    onDelete,
    onEdit,
    isChecked,
    className,
}) => {
    const iconClasses = classNames(styles.iconWrapper, className);
    return (
        <div className={iconClasses}>
            {isChecked ? (
                <FaCheck
                    className={styles.checkIcon}
                    onClick={onCheck}
                    title={IconTitles.PAYED}
                />
            ) : (
                <CgDanger
                    className={styles.dangerIcon}
                    onClick={onCheck}
                    title={IconTitles.NOT_PAYED}
                />
            )}
            <FaRegTrashAlt
                className={styles.trashIcon}
                title={IconTitles.DELETE}
                onClick={onDelete}
            />
            <MdEdit
                className={styles.editIcon}
                title={IconTitles.EDIT}
                onClick={onEdit}
            />
        </div>
    );
};

export default IconSet;
