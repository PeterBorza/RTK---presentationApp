import { FC } from "react";

import { TextInput, FadedModal, Form, Button } from "../../shared-components";
import { BubbleFormValues } from "./constants";
import { useForm } from "../../hooks";
import { BubbleCssProps } from "./types";

type BubbleFormType = {
    formObject: BubbleCssProps;
    isOpen: boolean;
    onToggleForm: (open: boolean) => void;
    onPost: (formObject: BubbleCssProps) => void;
};

const BubbleForm: FC<BubbleFormType> = ({ formObject, isOpen, onToggleForm, onPost }) => {
    const { values, changeHandler, resetValues } = useForm<BubbleCssProps>(formObject);

    const onCancelHandler = () => {
        resetValues();
        onToggleForm(false);
    };

    const onSubmitHandler = () => {
        const newBubble = {
            left: `${values.left}%`,
            top: `${values.top}%`,
            size: `${values.size}px`,
            opacity: `${values.opacity}`,
        };
        onPost(newBubble);
        resetValues();
        onToggleForm(false);
    };

    const renderFields = Object.entries(values).map(label => (
        <TextInput key={label[0]} value={label[1]} name={label[0]} onChange={changeHandler} />
    ));

    return (
        <>
            <Button value={BubbleFormValues.BUTTON_LABEL} onClick={() => onToggleForm(true)} />
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
