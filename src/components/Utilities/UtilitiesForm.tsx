import { FC } from "react";

import { v4 as uuid } from "uuid";

import { TextInput, ModalForm } from "../../reusables";
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

    const onSubmitHandler = () => {
        let lastCitire = "";
        if (utilityUnits.length === 0) lastCitire = values.citire;
        lastCitire = utilityUnits[utilityUnits.length - 1].citire;
        const newConsum = +values.citire - +lastCitire;
        const checkNewConsum = !isNaN(newConsum) ? newConsum : "0";

        const newGasUnit: UtilityStateUnit = {
            id: uuid(),
            dataCitire: values.dataCitire,
            selected: false,
            citire: checkIfValid(values.citire),
            factura: getCorrectValues(checkIfValid(values.factura)),
            consum: checkNewConsum.toString(),
            platit: false,
            edit: false,
        };

        postData(newGasUnit);
        resetValues();
    };

    const renderInputs = Object.entries(values).map(input => (
        <TextInput
            key={input[0]}
            value={input[1]}
            name={input[0]}
            onChange={changeHandler}
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
