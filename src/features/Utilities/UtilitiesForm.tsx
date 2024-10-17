import React from "react";

import { v4 as uuid } from "uuid";

import { TextInput, ModalForm } from "shared-components";
import { UtilityStateUnit, FormProps, UtilityFormValues } from "../Utilities";
import { useForm, useOnClickOutside } from "hooks";
import { useSelector } from "react-redux";
import { maxIndexSelector } from "./types";

type UtilityFormProps = {
  postData: (newUnit: UtilityStateUnit) => void;
  formValues: FormProps;
  lastUnit: UtilityStateUnit;
};

type ValidationType = Record<keyof FormProps, boolean>;

// TODO manage index update between items, date issues, sortability, filter by consumption, estimation

const UtilitiesForm = ({ postData, formValues, lastUnit }: UtilityFormProps) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const maxIndex = useSelector(maxIndexSelector);
  const { values, changeHandler, resetValues } = useForm<FormProps>(formValues);

  useOnClickOutside([modalRef], () => resetValues());

  const {
    FORM_BUTTON_LABEL: buttonLabel,
    FORM_WIDTH: formWidth,
    FORM_TITLE: formTitle,
  } = UtilityFormValues;

  // TODO validation into separate file

  const checkIfValid = (input: string) => !isNaN(+input);

  const highIndex = lastUnit && +values.index > +lastUnit.index + maxIndex;
  const lowIndex = lastUnit && +values.index < +lastUnit.index && values.index !== "";

  const onSubmitHandler = () => {
    const lastIndex = lastUnit.index;
    const { index, bill, readDate } = values;
    const isIndexValid = checkIfValid(index) && +index > +lastIndex;

    const isBillValid = checkIfValid(bill) && +bill >= 0;

    const newConsumption = +index - +lastIndex;
    const checkNewConsumption = !isNaN(newConsumption) ? newConsumption : 0;

    const estimatedValue = (+lastUnit.bill / +lastUnit.consumption) * +checkNewConsumption;

    const newUnit: UtilityStateUnit = {
      id: uuid(),
      readDate,
      selected: false,
      index,
      bill: isBillValid ? bill : "",
      consumption: checkNewConsumption,
      estimate: +estimatedValue.toFixed(2),
      payed: false,
      edit: false,
    };

    isIndexValid && postData(newUnit);
    resetValues();
  };

  const renderInputs = Object.entries(values).map(([key, value]) => {
    const index = key === "index";
    const validate: ValidationType = {
      index: !lowIndex && checkIfValid(value as string),
      bill: checkIfValid(value as string),
      readDate: true,
    };

    return (
      <TextInput
        key={key}
        isValid={validate[key as keyof ValidationType]}
        value={value as string}
        name={key}
        onChange={changeHandler}
        placeholder={index && lastUnit ? `-- ${lastUnit.index} --` : ""}
        errorMessage="Invalid value"
        required={index}
      />
    );
  });

  return (
    <ModalForm
      renderFields={renderInputs}
      onSubmit={onSubmitHandler}
      onCancel={resetValues}
      buttonLabel={buttonLabel}
      formWidth={formWidth}
      formTitle={formTitle}
      disabled={highIndex}
    />
  );
};

export default UtilitiesForm;
