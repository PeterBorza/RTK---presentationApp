import React from "react";

import { DropSelect } from "shared-components";
import { CoinsInterface } from "./types";
import useSortedCoins from "./useSortedCoins";

import classNames from "classnames";
import styles from "./CoinsTable.module.scss";

const {
    dataTable,
    coinCard: card,
    coinCard__title: _title,
    coinCard__table_row: _table_row,
    coinCard__content: _content,
    coinCard__dropDown: _dropDown,
    coinCard__table_row__selected: _table_row__selected,
} = styles;

// TODO add header to table, highlight sorted property, highlight title on hover
// add index as first column -  optional param

const CoinsTable = () => {
    const { error, selected, sortedTable, setSortedTable, sortedByKeys, selectCoinHandler } =
        useSortedCoins();

    const rowClasses = (coinId: string) =>
        classNames(_table_row, {
            [_table_row__selected]: selected && selected?.id === coinId,
        });

    const toProperTitle = (title: string) => `sort by ${title}`;

    const renderCoinCard = (title: string, arr?: CoinsInterface[]) => (
        <div key={title} className={card} tabIndex={1}>
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

    // const renderTable = Object.entries(sortedByKeys).map(([key, value]) =>
    //     renderCoinCard(key, value),
    // );

    return (
        <div className={_content}>
            {error && <h1>Something went wrong. Check your fetch method</h1>}
            <div className={_dropDown}>
                <DropSelect
                    menu={Object.keys(sortedByKeys)}
                    onSelect={value => setSortedTable(value as string)}
                />
            </div>
            <ul className={dataTable}>
                {renderCoinCard(sortedTable as string, sortedByKeys[sortedTable])}
                {/* {renderTable} */}
            </ul>
        </div>
    );
};

export default CoinsTable;
