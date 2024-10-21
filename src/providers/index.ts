export { PagesContext, PagesContextProvider, usePagesContext } from "./pages-context";
export { default as QueryProvider, useQueryHook } from "./tanstack-react-query";
export { default as Providers } from "./providers";

export const appInternalLinks = {
  HOME: "/",
  UTILITIES: "utilities",
  PHOTOS: "photos",
  FEATURES: "features",
  TESTER: "tester",
  DRAG: "d'n'd",
} as const;
