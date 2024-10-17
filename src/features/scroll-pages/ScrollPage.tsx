import { ScrollPage as Pages } from "shared-components";
import { usePagesContext } from "providers";
import { NavLinkUrls, useAppRedux } from "app";

const ScrollPage = () => {
  const { isDarkMode } = useAppRedux();
  const myPages = usePagesContext();
  return <Pages baseUrl={NavLinkUrls.FEATURES} pages={myPages} isDarkMode={isDarkMode} />;
};

export default ScrollPage;
