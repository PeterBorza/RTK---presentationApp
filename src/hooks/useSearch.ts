import { useEffect, useState } from "react";

const DEFAULT_DEBOUNCE_TIME = 250;

const useDebouncedValue = (value: string, time: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), time);

        return () => clearTimeout(timeout);
    }, [value, time]);

    return debouncedValue;
};

const useSearch = (inputValue: string, data: string[]) => {
    const debouncedValue = useDebouncedValue(inputValue, DEFAULT_DEBOUNCE_TIME);
    const [filteredData, setFilteredData] = useState<string[]>([]);

    useEffect(() => {
        setFilteredData([]);
        if (data.length > 0 && inputValue !== "") {
            const filtered = data.filter(val =>
                val.toLowerCase().includes(debouncedValue.trim().toLowerCase()),
            );

            setFilteredData(filtered);
        }
    }, [data, debouncedValue]);

    return filteredData;
};

export default useSearch;
