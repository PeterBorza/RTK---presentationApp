import React from "react";

import { v4 as uuid } from "uuid";

import { TextInput, ModalForm, AlertModal } from "shared-components";
import { UtilityStateUnit, FormProps, UtilityFormValues } from "../Utilities";
import { useForm, useOnClickOutside } from "hooks";
import { MAX_UNIT_INDEX_ALLOWED } from "./state";
import { UtilityTableLabels } from "./constants";

type UtilityFormProps = {
    postData: (newUnit: UtilityStateUnit) => void;
    formValues: FormProps;
    utilityUnits: UtilityStateUnit[];
};

const UtilitiesForm: React.FC<UtilityFormProps> = ({ postData, formValues, utilityUnits }) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null);
    const { values, changeHandler, resetValues } = useForm<FormProps>(formValues);

    useOnClickOutside(modalRef, () => resetValues());

    const {
        FORM_BUTTON_LABEL: buttonLabel,
        FORM_WIDTH: formWidth,
        FORM_TITLE: formTitle,
    } = UtilityFormValues;

    const checkIfValid = (input: string) => !isNaN(+input);

    const lastUnit = utilityUnits[utilityUnits.length - 1];
    const highIndex = lastUnit && +values.index > +lastUnit.index + MAX_UNIT_INDEX_ALLOWED;
    const lowIndex = lastUnit && +values.index < +lastUnit.index && values.index !== "";

    const onSubmitHandler = () => {
        const lastIndex = lastUnit.index;
        const { index, bill, readDate: date } = values;

        const isIndexValid = checkIfValid(index) && +index >= +lastIndex;
        const isBillValid = checkIfValid(bill) && +bill >= 0;

        const newConsumption = +index - +lastIndex;
        const checkNewConsumption = !isNaN(newConsumption) ? newConsumption : 0;

        const estimatedValue = (+lastUnit.bill / +lastUnit.consumption) * +checkNewConsumption;

        const newUnit: UtilityStateUnit = {
            id: uuid(),
            readDate: date,
            selected: false,
            index: index,
            bill: isBillValid ? bill : "",
            consumption: checkNewConsumption,
            estimate: +estimatedValue.toFixed(2),
            payed: false,
            edit: false,
        };

        isIndexValid && postData(newUnit);
        resetValues();
    };

    const renderInputs = Object.entries(values).map(([key, value], idx) => {
        const index = key === "index";
        const validate = {
            index: !lowIndex && checkIfValid(value),
            bill: checkIfValid(value),
            readDate: true,
        };
        return (
            <TextInput
                key={key}
                isValid={Object.values(validate)[idx]}
                value={value}
                name={key}
                onChange={changeHandler}
                placeholder={index && lastUnit ? lastUnit.index : ""}
            />
        );
    });

    return (
        <>
            <ModalForm
                renderFields={renderInputs}
                onSubmit={onSubmitHandler}
                onCancel={resetValues}
                buttonLabel={buttonLabel}
                formWidth={formWidth}
                formTitle={formTitle}
            />
            <AlertModal openModal={highIndex} ref={modalRef}>
                <h1>{UtilityTableLabels.INDEX_ALERT}</h1>
            </AlertModal>
        </>
    );
};

export default UtilitiesForm;
