import { Suspensed } from "shared-components";
import { usePagesContext } from "providers";
import { NavLinkUrls, useAppRedux } from "app";
import { lazy } from "react";

const Pages = lazy(() => import("shared-components/ScrollPage"));

const ScrollPage = () => {
  const { isDarkMode } = useAppRedux();
  const myPages = usePagesContext();
  return (
    <Suspensed>
      <Pages baseUrl={NavLinkUrls.FEATURES} pages={myPages} isDarkMode={isDarkMode} />
    </Suspensed>
  );
};

export default ScrollPage;
