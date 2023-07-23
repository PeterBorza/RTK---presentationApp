import { useMemo, useState } from "react";

import { COINS_URL, LinkUrls } from "app";
import { useFetch } from "hooks";
import { sortData } from "utils";
import { CoinsInterface, PartialCoins } from "./types";

interface SortedbyKeysType {
    [key: string]: CoinsInterface[];
}

// TODO see how you can implement order as argument for useSort();

const useSortedCoins = () => {
    const { data, error } = useFetch<CoinsInterface[]>(`${COINS_URL}/${LinkUrls.COINS}`);
    const [selected, setSelected] = useState<PartialCoins>({});
    const [sortedTable, setSortedTable] = useState<keyof SortedbyKeysType>("data");

    const sortedByKeys: SortedbyKeysType = useMemo(
        () => ({
            released: sortData<CoinsInterface>({
                data: data ?? [],
                dataProperty: "released",
            }),
            count: sortData<CoinsInterface>({
                data: data ?? [],
                dataProperty: "count",
            }),
            theme: sortData<CoinsInterface>({
                data: data ?? [],
                dataProperty: "theme",
            }),
            data: data || [],
        }),
        [data],
    );

    const selectCoinHandler = (id: string) => {
        const selection = data?.find(coin => coin.id === id) ?? ({} as CoinsInterface);
        if (selection) setSelected(selection);
    };

    return {
        data,
        error,
        selected,
        setSelected,
        sortedTable,
        setSortedTable,
        sortedByKeys,
        selectCoinHandler,
    };
};

export default useSortedCoins;
