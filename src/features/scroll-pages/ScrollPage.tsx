import { ScrollPage as Pages } from "shared-components";
import { usePagesContext } from "context";
import { NavLinkUrls } from "app";

const ScrollPage = () => {
    const myPages = usePagesContext();
    return <Pages baseUrl={NavLinkUrls.SCROLL} pages={myPages} isDarkMode />;
};

export default ScrollPage;
