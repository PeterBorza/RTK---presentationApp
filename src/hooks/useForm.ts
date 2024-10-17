import { useState } from "react";

interface ReturnForm<T extends Record<string, unknown>> {
  values: T;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetValues: () => void;
}

const useForm = <T extends Record<string, unknown>>(data: T): ReturnForm<T> => {
  const [values, setValues] = useState<T>(data);

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

export default useForm;
