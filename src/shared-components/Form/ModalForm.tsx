import { ReactNode, FormEvent } from "react";

import { useToggle } from "hooks";
import { Form } from ".";
import { Button, FadedModal } from "..";
export interface FormWrapProps {
    formWidth: "small" | "medium" | "large" | "xxl";
    renderFields: ReactNode;
    onSubmit: (e: FormEvent) => void;
    onCancel: () => void;
    buttonLabel?: string;
    formTitle?: string;
}

const ModalForm = ({
    formWidth,
    renderFields,
    onSubmit,
    onCancel,
    buttonLabel = "FORM",
    formTitle,
}: FormWrapProps) => {
    const [openModal, , setIsOpenModal] = useToggle(false);

    const onCancelHandler = () => {
        onCancel();
        setIsOpenModal(false);
    };

    const onOpenHandler = () => {
        setIsOpenModal(true);
    };

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(e);
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
                />
            </FadedModal>
        </>
    );
};

export default ModalForm;
