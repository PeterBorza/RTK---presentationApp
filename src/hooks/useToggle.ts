import { Dispatch, SetStateAction, useCallback, useState } from "react";

const useToggle = (
    defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
    const [value, setValue] = useState(!!defaultValue);

    const toggle = useCallback(() => setValue(x => !x), []);

    return [value, toggle, setValue];
};

export default useToggle;
