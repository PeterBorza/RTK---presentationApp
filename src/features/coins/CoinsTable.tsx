import React from "react";

import { DropSelect, Loader } from "shared-components";
import { CoinsInterface } from "./types";
import useSortedCoins from "./useSortedCoins";

import classNames from "classnames";
import styles from "./CoinsTable.module.scss";
import { useAppRedux } from "app";

const {
    dataTable,
    coinCard: card,
    coinCard__title: _title,
    coinCard__table_row: _table_row,
    coinCard__content: _content,
    coinCard__dropDown: _dropDown,
    coinCard__table_row__selected: _selected,
} = styles;

// TODO add header to table, highlight sorted property, highlight title on hover
// add index as first column -  optional param

// fetching at every rerender ... memoize or use other way to fetch!!

const CoinsTable = () => {
    const { isDarkMode } = useAppRedux();
    const {
        isError: error,
        isLoading,
        selected,
        sortedTable,
        setSortedTable,
        sortedByKeys,
        selectCoinHandler,
    } = useSortedCoins();

    const rowClasses = (coinId: string) =>
        classNames(_table_row, {
            [_selected]: selected && selected?.id === coinId,
        });

    const toProperTitle = (title: string) => `sort by ${title}`;

    const renderCoinCard = (coin: CoinsInterface) => (
        <li
            key={`${coin.id}`}
            className={rowClasses(coin.id)}
            onClick={() => selectCoinHandler(coin.id)}
        >
            <h2>{coin.theme}</h2>
            <h2>{coin.count}</h2>
            <h2>{coin.released}</h2>
        </li>
    );

    if (isLoading) return <Loader />;

    return (
        <div className={_content}>
            {error && <h1>Something went wrong. Check your fetch method</h1>}
            <div className={_dropDown}>
                <DropSelect
                    menu={Object.keys(sortedByKeys)}
                    onSelect={value => setSortedTable(value as string)}
                    isDarkMode={isDarkMode}
                />
            </div>
            <div className={dataTable}>
                <ul className={card} tabIndex={1}>
                    <h1 className={_title}>{toProperTitle(sortedTable as string)}</h1>
                    {sortedByKeys[sortedTable].map(renderCoinCard)}
                </ul>
            </div>
        </div>
    );
};

export default CoinsTable;
