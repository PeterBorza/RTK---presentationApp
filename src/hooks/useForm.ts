import { useState } from "react";
import { FormProps } from "../components/Utilities/types";

export const useForm = (data: FormProps) => {
    const [values, setValues] = useState<FormProps>(data);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name !== "dataCitire" && e.target.value === "") return;

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const resetValues = () => {
        setValues(data);
    };

    return { values, changeHandler, resetValues };
};
