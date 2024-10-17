import React from "react";

import { TextInput, FadedModal, Form, Button } from "shared-components";
import { BubbleFormValues } from "./constants";
import { useForm } from "hooks";
import { BubbleCssProps, BubbleWithValidationsType, InputValueType } from "./types";
import { getValidation, getErrorMessage, bubbleValidations } from "./bubbleValidation";

type BubbleFormType = {
  formObject: BubbleWithValidationsType;
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
  onPost: (formObject: BubbleCssProps) => void;
};

const BubbleForm = ({ formObject, isOpen, openForm, closeForm, onPost }: BubbleFormType) => {
  const myValues = Object.entries(formObject).reduce<BubbleCssProps>((acc, [key, value]) => {
    return { ...acc, [key]: value.inputValue };
  }, {} as BubbleCssProps);

  const { values, changeHandler, resetValues } = useForm(myValues);

  const onCancelHandler = () => {
    resetValues();
    closeForm();
  };

  const onSubmitHandler = () => {
    onPost(values);
    resetValues();
    closeForm();
  };

  const renderInputsFromX = React.useMemo(
    () =>
      Object.entries(bubbleValidations).map(([key, value]) => {
        const inputValue = values[key as InputValueType];
        return (
          <TextInput
            key={key}
            value={inputValue}
            name={key}
            onChange={changeHandler}
            isValid={getValidation(value)}
            errorMessage={getErrorMessage(value)}
            required
          />
        );
      }),
    [values, changeHandler],
  );

  return (
    <>
      <Button value={BubbleFormValues.BUTTON_LABEL} onClick={openForm} />
      <FadedModal isOpen={isOpen}>
        <Form
          onSubmit={onSubmitHandler}
          width={BubbleFormValues.FORM_WIDTH}
          renderFields={renderInputsFromX}
          onCancel={onCancelHandler}
          formTitle={BubbleFormValues.FORM_TITLE}
          disabled={Object.values(values).some(value => value === "")}
        />
      </FadedModal>
    </>
  );
};

export default BubbleForm;
