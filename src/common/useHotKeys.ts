import { NavLinkUrls } from "app";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHotKeys = () => {
    const navigate = useNavigate();
    const [currentKey, setCurrentKey] = useState("");

    const features: Record<string, NavLinkUrls> = useMemo(
        () => ({
            H: NavLinkUrls.HOME,
            F: NavLinkUrls.FEATURES,
            P: NavLinkUrls.PHOTOS,
            T: NavLinkUrls.TESTER,
            U: NavLinkUrls.UTILITIES,
            D: NavLinkUrls.DRAG,
        }),
        [],
    );

    const handleMenuKBNavigation = useCallback(
        (e: KeyboardEvent) => {
            if (features[e.key] && e.shiftKey) setCurrentKey(features[e.key]);
        },
        [features, currentKey],
    );

    useEffect(() => {
        currentKey && navigate(currentKey);
    }, [currentKey, navigate]);

    useEffect(() => {
        window.addEventListener("keydown", handleMenuKBNavigation);
        setCurrentKey("");
        return () => window.removeEventListener("keydown", handleMenuKBNavigation);
    }, [handleMenuKBNavigation]);

    return null;
};

export default useHotKeys;
