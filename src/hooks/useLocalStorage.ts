import { LocalStorageKeys as LS } from "common/localStorageKeys";
import { useState } from "react";

const useLocalStorage = <T>(key: LS, initialValue: T) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value: T): void => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {}
    };

    const removeValue = () => {
        window.localStorage.removeItem(key);
    };

    return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
