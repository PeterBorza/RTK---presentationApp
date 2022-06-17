import { FC, FormEvent } from "react";

import { CustomIcon, InputCard } from "shared-components";
import { UtilityStateUnit, UtilityTableLabels } from "..";
import { useForm } from "hooks";

import EditCell from "./EditCell";
import { InputSize } from "shared-components/InputCard/InputCard";
import { icons } from "utils";

import styles from "./EditCard.module.scss";
import { FormProps } from "../types";

type Props = {
    resetEdit: () => void;
    editUnit: (editedUnit: UtilityStateUnit) => void;
    units: UtilityStateUnit[];
};

const EditFormCard: FC<UtilityStateUnit & Props> = ({ resetEdit, editUnit, units, ...unit }) => {
    const { readDate, index, consumption, estimate, bill, id } = unit;
    const { values, changeHandler } = useForm<FormProps>({
        readDate,
        index,
        bill,
    });

    const prevUnitIndex = units.findIndex(unit => id === unit.id) - 1;
    const prevUnit = units[prevUnitIndex];

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const estimatedBill = prevUnit ? (+prevUnit.bill / prevUnit.consumption) * consumption : 0;

        const editedUnit: UtilityStateUnit = {
            ...unit,
            readDate: values.readDate,
            index: values.index,
            bill: values.bill,
            consumption: +consumption + +values.index - +index,
            selected: false,
            edit: false,
            estimate: +estimatedBill.toFixed(2),
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
                <InputCard
                    size={InputSize.SMALL}
                    onChange={changeHandler}
                    name="readDate"
                    value={values.readDate}
                />
            </EditCell>
            <EditCell>
                <InputCard
                    size={InputSize.SMALL}
                    onChange={changeHandler}
                    name="index"
                    value={values.index}
                />
            </EditCell>
            <EditCell>
                <p>{consumption}</p>
            </EditCell>
            <EditCell>
                <p>{estimate}</p>
            </EditCell>
            <EditCell>
                <InputCard
                    size={InputSize.SMALL}
                    onChange={changeHandler}
                    name="bill"
                    value={values.bill}
                />
            </EditCell>
            <EditCell>
                <button type="submit" className={styles.submitEditButton}>
                    <CustomIcon title={UtilityTableLabels.CONFIRM} icon={icons.enter} />
                </button>
                <CustomIcon
                    title={UtilityTableLabels.CANCEL_EDIT}
                    onClick={resetEdit}
                    icon={icons.cancel}
                />
            </EditCell>
        </form>
    );
};

export default EditFormCard;
