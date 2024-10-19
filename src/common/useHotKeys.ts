import { appInternalLinks as links } from "providers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type LinksType = typeof links;

const useHotKeys = () => {
  const navigate = useNavigate();
  const [currentKey, setCurrentKey] = useState("");

  const features = useMemo(
    () => ({
      H: links.HOME,
      F: links.FEATURES,
      P: links.PHOTOS,
      T: links.TESTER,
      U: links.UTILITIES,
      D: links.DRAG,
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
