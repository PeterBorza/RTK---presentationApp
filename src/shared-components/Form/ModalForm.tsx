import React, { ReactNode } from "react";

import { useToggle } from "hooks";
import { Form } from ".";
import { Button, FadedModal } from "..";
export interface FormWrapProps {
    formWidth: "small" | "medium" | "large" | "xxl";
    renderFields: ReactNode;
    onSubmit: () => void;
    onCancel: () => void;
    buttonLabel?: string;
    formTitle?: string;
    disabled?: boolean;
}

const ModalForm = ({
    formWidth,
    renderFields,
    onSubmit,
    onCancel,
    buttonLabel = "FORM",
    formTitle,
    disabled = false,
}: FormWrapProps) => {
    const [openModal, , setIsOpenModal] = useToggle(false);

    const onCancelHandler = () => {
        onCancel();
        setIsOpenModal(false);
    };

    const onOpenHandler = () => setIsOpenModal(true);

    const submitHandler = () => {
        onSubmit();
        setIsOpenModal(false);
    };

    return (
        <>
            <Button value={buttonLabel} onClick={onOpenHandler} />
            <FadedModal isOpen={openModal}>
                <Form
                    onSubmit={submitHandler}
                    width={formWidth}
                    renderFields={renderFields}
                    onCancel={onCancelHandler}
                    formTitle={formTitle}
                    disabled={disabled}
                />
            </FadedModal>
        </>
    );
};

export default ModalForm;
