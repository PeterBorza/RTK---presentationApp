import React from "react";
import { useFetch } from "hooks";
import { BaseAPI, LinkUrls } from "app/constants";
import { CoinsInterface } from "./types";

const CoinsTable = () => {
    const { data, error } = useFetch<CoinsInterface[]>(`${BaseAPI.COINS_URL}/${LinkUrls.COINS}`);

    const sortByRelease = data?.sort((a, b) => a.released - b.released);
    const sortByCount = data?.sort((a, b) => a.count - b.count);

    return (
        <div>
            {error && <h1>Something went wrong. Check your fetch method</h1>}
            {sortByRelease &&
                sortByRelease.map(coin => (
                    <div key={coin.id} style={{ display: "flex", gap: "1rem" }}>
                        <h2>{coin.released}</h2>
                        <h2 style={{ color: "blue" }}>{coin.count}</h2>
                    </div>
                ))}
            <hr style={{ margin: "1rem" }} />
            {sortByCount &&
                sortByCount.map(coin => (
                    <div key={coin.id} style={{ display: "flex", gap: "1rem" }}>
                        <h2>{coin.released}</h2>
                        <h2 style={{ color: "blue" }}>{coin.count}</h2>
                    </div>
                ))}
        </div>
    );
};

export default CoinsTable;
