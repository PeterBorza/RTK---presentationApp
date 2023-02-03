import React, { useCallback, useMemo } from "react";

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

    const onCancelHandler = () => {
        resetValues();
        closeForm();
    };

    const validResults = useCallback((key: keyof typeof values, value: string) => {
        if (isNaN(+value)) {
            return false;
        } else {
            if (key === "left" || key === "top") {
                if (+value < 0 || +value > 100) return false;
            }
            if (key === "size") {
                if (+value < 0 || +value > 612) return false;
            }
            if (key === "opacity") {
                if (+value < 0 || +value > 1) return false;
            }
            return true;
        }
    }, []);

    const onSubmitHandler = () => {
        const { left, top, size, opacity } = values as BubbleCssProps;

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

    const errorMessages = useMemo(
        () =>
            ({
                left: "0 to 100",
                top: "0 to 100",
                size: "0 to 612",
                opacity: "0 to 1",
            } as Record<keyof typeof values, string>),
        [],
    );

    const renderFields = React.useMemo(
        () =>
            Object.entries(values).map(([key, value]) => (
                <TextInput
                    key={key}
                    value={value}
                    name={key}
                    onChange={changeHandler}
                    isValid={validResults(key as keyof typeof values, value)}
                    errorMessage={errorMessages[key as keyof typeof values]}
                />
            )),
        [values, changeHandler, validResults, errorMessages],
    );

    const disabledSubmit = Object.values(values).some(v => v === "");

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
                    disabled={disabledSubmit}
                />
            </FadedModal>
        </>
    );
};

export default BubbleForm;
