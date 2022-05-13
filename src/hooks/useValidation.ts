import React, { useEffect } from "react";

export interface ValidType {
    isValid: boolean;
    message: string;
}

const initialValidation: ValidType = {
    isValid: true,
    message: "no errors found",
};

const useValidation = (value: string) => {
    const [valid, setValid] = React.useState<ValidType>(initialValidation);

    const correctNumber = !isNaN(Number(value)) || value === "";

    const checkIfNumber = () => {
        setValid({
            isValid: correctNumber,
            message: correctNumber ? "number is correct" : "input value is not a number",
        });
    };

    useEffect(() => {
        checkIfNumber();
    }, [value]);

    return valid;
};

export default useValidation;
