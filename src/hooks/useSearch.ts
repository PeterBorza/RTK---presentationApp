import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const DEFAULT_DEBOUNCE_TIME = 250;

const useSearch = (inputValue: string, data: string[]): [string, string[]] => {
  const debouncedValue = useDebounce(inputValue, DEFAULT_DEBOUNCE_TIME);
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => {
    setFilteredData([]);
    if (data.length > 0 && inputValue.trim() !== "") {
      const filtered = data.filter(val =>
        val.trim().toLowerCase().includes(debouncedValue.trim().toLowerCase()),
      );

      setFilteredData(filtered);
    }
  }, [data, debouncedValue, inputValue]);

  return [debouncedValue.trim(), filteredData];
};

export default useSearch;
