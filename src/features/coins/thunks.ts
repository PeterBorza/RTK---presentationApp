import { COINS_URL, LinkUrls } from "app";
import { CoinsInterface } from "./types";
import { useQueryHook } from "providers";

export const useCoins = (): {
    data: [] | CoinsInterface[];
    isError: boolean;
    isLoading: boolean;
} => {
    const {
        resData: data,
        isError,
        isLoading,
    } = useQueryHook<CoinsInterface[]>({
        key: "coins",
        url: `${COINS_URL}/${LinkUrls.COINS}`,
    });

    return {
        data,
        isError,
        isLoading,
    };
};
