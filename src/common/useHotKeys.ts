import { NavLinkUrls } from "app";
import { useCallback, useEffect, useMemo, useState } from "react";

const useHotKeys = () => {
    const [currentKey, setCurrentKey] = useState("/");

    const features: Record<string, NavLinkUrls> = useMemo(
        () => ({
            H: NavLinkUrls.HOME,
            F: NavLinkUrls.FEATURES,
            P: NavLinkUrls.PHOTOS,
            T: NavLinkUrls.TESTER,
            U: NavLinkUrls.UTILITIES,
        }),
        [],
    );

    const handleMenuKBNavigation = useCallback(
        (e: KeyboardEvent) => {
            // if (e.key === "L") window.location.href = `${NavLinkUrls.FEATURES}#lift`;
            if (features[e.key] && e.shiftKey) setCurrentKey(features[e.key]);
        },
        [features, setCurrentKey],
    );

    window.addEventListener("keydown", handleMenuKBNavigation);

    useEffect(() => {
        window.removeEventListener("keydown", handleMenuKBNavigation);
        setCurrentKey("");
    }, [handleMenuKBNavigation]);

    return currentKey;
};

export default useHotKeys;
