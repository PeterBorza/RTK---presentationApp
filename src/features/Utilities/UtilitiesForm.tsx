import { FC } from "react";

import { v4 as uuid } from "uuid";

import { TextInput, ModalForm } from "../../shared-components";
import { UtilityStateUnit, FormProps, UtilityFormValues } from "../Utilities";
import { useForm } from "../../hooks";

type UtilityFormProps = {
    postData: (newUnit: UtilityStateUnit) => void;
    formValues: FormProps;
    utilityUnits: UtilityStateUnit[];
};

const UtilitiesForm: FC<UtilityFormProps> = ({
    postData,
    formValues,
    utilityUnits,
}) => {
    const {
        FORM_BUTTON_LABEL: buttonLabel,
        FORM_WIDTH: formWidth,
        FORM_TITLE: formTitle,
    } = UtilityFormValues;
    const { values, changeHandler, resetValues } = useForm(formValues);

    const checkIfValid = (input: string) => (isNaN(+input) || "" ? "0" : input);

    const getCorrectValues = (value: string) => {
        if (value.includes(",")) return value.replace(",", ".");
        return value;
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name !== "readDate" && e.target.value === "") return;
        changeHandler(e);
    };

    const onSubmitHandler = () => {
        const previousUnit = utilityUnits[utilityUnits.length - 1];
        let lastCitire = "";
        if (utilityUnits.length === 0) lastCitire = values.index;
        lastCitire = previousUnit.index;
        const newConsumption = +values.index - +lastCitire;
        const checkNewConsumption = !isNaN(newConsumption)
            ? newConsumption
            : "0";

        const estimatedValue =
            (+previousUnit.bill / +previousUnit.consumption) *
            +checkNewConsumption;

        const newUnit: UtilityStateUnit = {
            id: uuid(),
            readDate: values.readDate,
            selected: false,
            index: checkIfValid(values.index),
            bill: getCorrectValues(checkIfValid(values.bill)),
            consumption: checkNewConsumption.toString(),
            estimate: +estimatedValue.toFixed(2),
            payed: false,
            edit: false,
        };

        postData(newUnit);
        resetValues();
    };

    const renderInputs = Object.entries(values).map(input => (
        <TextInput
            key={input[0]}
            value={input[1]}
            name={input[0]}
            onChange={onChangeHandler}
        />
    ));

    return (
        <ModalForm
            renderFields={renderInputs}
            onSubmit={onSubmitHandler}
            onCancel={() => resetValues()}
            buttonLabel={buttonLabel}
            formWidth={formWidth}
            formTitle={formTitle}
        />
    );
};

export default UtilitiesForm;
