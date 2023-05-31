import { NavLinkUrls } from "app";
import { useEffect, useState } from "react";

const useHotKeys = () => {
    const [currentKey, setCurrentKey] = useState("/");

    const features: Record<string, NavLinkUrls> = {
        H: NavLinkUrls.HOME,
        F: NavLinkUrls.FEATURES,
        P: NavLinkUrls.PHOTOS,
        T: NavLinkUrls.TESTER,
        U: NavLinkUrls.UTILITIES,
    };
    const handleMenuKBNavigation = (e: KeyboardEvent) => {
        // if (e.key === "L") window.location.href = `${NavLinkUrls.FEATURES}#lift`;
        if (features[e.key] && e.shiftKey) setCurrentKey(features[e.key]);
    };
    window.addEventListener("keydown", handleMenuKBNavigation);
    useEffect(() => {
        window.removeEventListener("keydown", handleMenuKBNavigation);
        setCurrentKey("");
    }, []);

    return currentKey;
};

export default useHotKeys;
