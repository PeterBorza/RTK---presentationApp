import { useState } from "react";

interface SortType<T> {
    data: T[];
    dataProperty?: keyof T;
}

const useSort = <T>({ data, dataProperty }: SortType<T>): T[] => {
    let temp: T[] = [];

    if (data && dataProperty && typeof dataProperty === "string" && typeof data === "object") {
        temp = data.sort((a, b) => {
            if (a[dataProperty] > b[dataProperty]) return 1;
            if (a[dataProperty] < b[dataProperty]) return -1;
            return 0;
        });
    }

    if (data && dataProperty && typeof dataProperty === "number" && typeof data === "object") {
        temp = data.sort((a, b) => {
            if (a[dataProperty] > b[dataProperty]) return 1;
            if (a[dataProperty] < b[dataProperty]) return -1;
            return 0;
        });
    }

    if (data && data.every(value => typeof value === "number")) {
        temp = data.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
    }

    return temp;
};

export default useSort;
