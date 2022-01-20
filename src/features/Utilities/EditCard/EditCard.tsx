import { FC, FormEvent } from "react";

import { CustomIcon } from "../../../shared-components";
import { UtilityStateUnit, UtilityTableLabels } from "..";
import { useForm } from "../../../hooks";
import { CgEnter } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";

import styles from "./EditCard.module.scss";
import { useSelector } from "react-redux";
import { unitsState } from "../../Gas";
import EditCell from "./EditCell";

type Props = {
    resetEdit: () => void;
    editUnit: (editedUnit: UtilityStateUnit) => void;
};

const EditFormCard: FC<UtilityStateUnit & Props> = ({
    resetEdit,
    editUnit,
    ...unit
}) => {
    const units = useSelector(unitsState);
    const { readDate, index, consumption, estimate, bill, id } = unit;
    const { values, changeHandler } = useForm({
        readDate,
        index,
        bill,
    });

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const editedUnit: UtilityStateUnit = {
            ...unit,
            readDate: values.readDate,
            index: values.index,
            bill: values.bill,
            consumption: +consumption + +values.index - +index,
            selected: false,
            edit: false,
        };

        const editedUnitIndex = units.findIndex(item => item.id === id);

        if (units.length > 0 && editedUnitIndex !== units.length - 1) {
            const nextUnitConsumption = {
                ...units[editedUnitIndex + 1],
                consumption: +units[editedUnitIndex + 1].index - +values.index,
            };
            editUnit(nextUnitConsumption);
        }
        editUnit(editedUnit);
    };

    return (
        <form className={styles.wrapper} onSubmit={onSubmitHandler}>
            <EditCell>
                <input
                    type="text"
                    placeholder={readDate}
                    onChange={changeHandler}
                    name="readDate"
                    value={values.readDate}
                    title={values.readDate}
                />
            </EditCell>
            <EditCell>
                <input
                    type="text"
                    placeholder={index}
                    onChange={changeHandler}
                    name="index"
                    value={values.index}
                    title={values.index}
                />
            </EditCell>
            <EditCell>
                <p>{consumption}</p>
            </EditCell>
            <EditCell>
                <p>{estimate}</p>
            </EditCell>
            <EditCell>
                <input
                    type="text"
                    placeholder={bill}
                    onChange={changeHandler}
                    name="bill"
                    value={values.bill}
                    title={values.bill}
                />
            </EditCell>
            <EditCell>
                <button type="submit" className={styles.submitEditButton}>
                    <CustomIcon
                        title={UtilityTableLabels.CONFIRM}
                        icon={<CgEnter />}
                    />
                </button>
                <CustomIcon
                    title={UtilityTableLabels.CANCEL_EDIT}
                    onClick={() => resetEdit()}
                    icon={<GiCancel />}
                />
            </EditCell>
        </form>
    );
};

export default EditFormCard;
