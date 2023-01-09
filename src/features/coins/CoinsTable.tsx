import React, { useState } from "react";
import { useFetch, useSort } from "hooks";
import { BaseAPI, LinkUrls } from "app";
import { CoinsInterface } from "./types";

import classNames from "classnames";
import styles from "./CoinsTable.module.scss";
import { DropSelect } from "shared-components";

const {
    dataTable,
    coinCard: card,
    coinCard__title: _title,
    coinCard__table_row: _table_row,
    coinCard__content: _content,
    coinCard__dropDown: _dropDown,
    // coinCard__table_row__selected: _table_row__selected,
} = styles;

interface SortObject {
    [key: string]: CoinsInterface[];
}

// TODO add header to table, highlight sorted property, highlight title on hover
// add index as first column -  optional param

const CoinsTable = () => {
    const { data, error } = useFetch<CoinsInterface[]>(`${BaseAPI.COINS_URL}/${LinkUrls.COINS}`);

    const [selected, setSelected] = useState<CoinsInterface>({
        id: "",
        count: 0,
        selected: false,
        released: 0,
        celebrating: null,
        theme: "",
        details: {
            front: "",
            back: "",
            storyLink: "",
        },
    });
    const [sortedTable, setSortedTable] = useState<keyof SortObject>("data");

    const rowClasses = (coinId: string) =>
        classNames(_table_row, {
            [styles.coinCard__table_row__selected]: selected && selected?.id === coinId,
        });

    const sortByTheme = useSort<CoinsInterface>({ data: data ?? [], dataProperty: "theme" });
    const sortByCount = useSort<CoinsInterface>({
        data: data ? [...data] : [],
        dataProperty: "count",
    });
    const sortByReleased = useSort<CoinsInterface>({
        data: data ? [...data] : [],
        dataProperty: "released",
    });

    const sortObject: SortObject = {
        released: sortByReleased,
        count: sortByCount,
        theme: sortByTheme,
        data: data || [],
    };

    const selectCoinHandler = (id: string) => {
        const selection = data?.find(coin => coin.id === id) ?? ({} as CoinsInterface);

        if (selection) setSelected(selection);
    };

    const toProperTitle = (title: string) => `sort by ${title}`;

    const coinCard = (title: string, arr?: CoinsInterface[]) => (
        <div key={title} className={card}>
            <h1 className={_title}>{toProperTitle(title)}</h1>
            {arr?.map(coin => (
                <div
                    key={`${coin.id}-${title}`}
                    className={rowClasses(coin.id)}
                    onClick={() => selectCoinHandler(coin.id)}
                >
                    <h2>{coin.theme}</h2>
                    <h2>{coin.count}</h2>
                    <h2>{coin.released}</h2>
                </div>
            ))}
        </div>
    );

    const renderTable = Object.entries(sortObject).map(([key, value]) => coinCard(key, value));

    return (
        <div className={_content}>
            {error && <h1>Something went wrong. Check your fetch method</h1>}
            <div className={_dropDown}>
                <DropSelect
                    menu={Object.keys(sortObject)}
                    onSelect={value => setSortedTable(value as string)}
                />
            </div>
            <ul className={dataTable}>
                {coinCard(sortedTable as string, sortObject[sortedTable])}
            </ul>
        </div>
    );
};

export default CoinsTable;
