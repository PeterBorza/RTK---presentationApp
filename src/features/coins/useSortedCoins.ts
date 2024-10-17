import { useMemo, useState } from "react";

import { sortData } from "utils";
import { CoinsInterface, PartialCoins } from "./types";
import { useCoins } from "./thunks";

interface SortedbyKeysType {
  [key: string]: CoinsInterface[];
}

// TODO see how you can implement order as argument for useSort();

const useSortedCoins = () => {
  const { data, isError, isLoading } = useCoins();
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
    const selection = data?.find(coin => coin.id === id);
    if (selection) setSelected(selection);
  };

  return {
    data,
    isError,
    isLoading,
    selected,
    setSelected,
    sortedTable,
    setSortedTable,
    sortedByKeys,
    selectCoinHandler,
  };
};

export default useSortedCoins;
