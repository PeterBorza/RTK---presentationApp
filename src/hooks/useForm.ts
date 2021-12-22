import { useState } from "react";
import { FormProps } from "../features/Utilities/types";

export const useForm = (data: FormProps) => {
    const [values, setValues] = useState<FormProps>(data);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
