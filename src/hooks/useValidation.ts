import React, { useEffect } from "react";

export interface ValidType {
  isValid: boolean;
  message: string;
}

const initialValidation: ValidType = {
  isValid: true,
  message: "no errors found",
};

//TODO validate string or number , by the param given

const useValidation = (value: string) => {
  const [valid, setValid] = React.useState<ValidType>(initialValidation);

  const checkIfNumber = (value: string) => {
    const correctNumber = !isNaN(Number(value)) || value === "";
    setValid({
      isValid: correctNumber,
      message: correctNumber ? "number is correct" : "input value is not a number",
    });
  };

  useEffect(() => {
    checkIfNumber(value);
  }, [value]);

  return valid;
};

export default useValidation;
