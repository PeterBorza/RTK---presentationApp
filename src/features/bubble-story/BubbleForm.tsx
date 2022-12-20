import React, { useState } from "react";

import { TextInput, FadedModal, Form, Button } from "shared-components";
import { BubbleFormValues } from "./constants";
import { useForm } from "hooks";
import { BubbleCssProps } from "./types";

type BubbleFormType = {
    formObject: BubbleCssProps;
    isOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
    onPost: (formObject: BubbleCssProps) => void;
};

const BubbleForm = ({ formObject, isOpen, openForm, closeForm, onPost }: BubbleFormType) => {
    const { values, changeHandler, resetValues } = useForm<BubbleCssProps>(formObject);
    // const [valid, setValid] = useState(true);

    const onCancelHandler = () => {
        resetValues();
        closeForm();
    };

    const validResults = (key: keyof typeof values, value: string) => {
        if (isNaN(+value) || value === "") {
            return true;
        } else {
            if (key === "left" || key === "top") {
                if (+value < 0 || +value > 100) return true;
            }
            if (key === "size") {
                if (+value < 10 || +value > 612) return true;
            }
            if (key === "opacity") {
                if (+value < 0 || +value > 1) return true;
            }
            return false;
        }
    };

    const onSubmitHandler = () => {
        const { left, top, size, opacity } = values;

        //TODO errorhandling missing!!!
        const newBubble = {
            left,
            top,
            size,
            opacity,
        };
        onPost(newBubble);
        resetValues();
        closeForm();
    };

    const errorMessages: Record<keyof typeof values, string> = {
        left: "percentages must be between 0 and 100",
        top: "percentages must be between 0 and 100",
        size: "size must be between 0 and 612",
        opacity: "opacity must be between 0 and 1",
    };

    const renderFields = React.useMemo(
        () =>
            Object.entries(values).map(([key, value]) => (
                <TextInput
                    key={key}
                    value={value}
                    name={key}
                    onChange={changeHandler}
                    isValid={!validResults(key as keyof typeof values, value)}
                    errorMessage={errorMessages[key as keyof typeof values]}
                />
            )),
        [values, changeHandler, validResults],
    );

    return (
        <>
            <Button value={BubbleFormValues.BUTTON_LABEL} onClick={openForm} />
            <FadedModal isOpen={isOpen}>
                <Form
                    onSubmit={onSubmitHandler}
                    width={BubbleFormValues.FORM_WIDTH}
                    renderFields={renderFields}
                    onCancel={onCancelHandler}
                    formTitle={BubbleFormValues.FORM_TITLE}
                />
            </FadedModal>
        </>
    );
};

export default BubbleForm;
