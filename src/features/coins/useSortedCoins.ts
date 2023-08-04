import { useMemo, useState } from "react";

import { COINS_URL, LinkUrls } from "app";
import { sortData } from "utils";
import { CoinsInterface, PartialCoins } from "./types";
import { useQueryHook } from "providers";

interface SortedbyKeysType {
    [key: string]: CoinsInterface[];
}

// TODO see how you can implement order as argument for useSort();

const useSortedCoins = () => {
    const { resData: data, isError } = useQueryHook<CoinsInterface[]>({
        key: "coins",
        url: `${COINS_URL}/${LinkUrls.COINS}`,
    });
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
        isError,
        selected,
        setSelected,
        sortedTable,
        setSortedTable,
        sortedByKeys,
        selectCoinHandler,
    };
};

export default useSortedCoins;
