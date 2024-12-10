import { useEffect, useState } from "react";

import { useDebounce } from "./useDebounce";

type SearchType<T> = {
  inputValue: string;
  data: T[];
  keyOfData?: keyof T;
  debounce?: number;
};

type Result<T> = {
  searchValue: string;
  filteredData: T[];
};

export const useSearch = <T>({
  inputValue,
  data,
  keyOfData,
  debounce = 0,
}: SearchType<T>): Result<T> => {
  const debouncedValue = useDebounce(inputValue, debounce);
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    if (data.length > 0 || inputValue.trim() !== "") setFilteredData(data);

    const isStringArray = Array.isArray(data) && data.every(val => typeof val === "string");
    const isObject =
      typeof data === "object" &&
      keyOfData &&
      data.every(item => typeof item[keyOfData] === "string");

    const filtered = data.filter(val => {
      if (isObject)
        return (val[keyOfData] as string)
          .trim()
          .toLowerCase()
          .includes(debouncedValue.trim().toLowerCase());

      if (isStringArray)
        return (val as unknown as string)
          .trim()
          .toLowerCase()
          .includes(debouncedValue.trim().toLowerCase());

      return data;
    });
    setFilteredData(filtered);
  }, [data, debouncedValue, inputValue, keyOfData]);

  return {
    searchValue: debouncedValue.trim(),
    filteredData,
  };
};
