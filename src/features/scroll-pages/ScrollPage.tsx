import { ScrollPage as Pages } from "shared-components";
import { usePagesContext } from "context";

const ScrollPage = () => {
    const myPages = usePagesContext();
    return <Pages pages={myPages} isDarkMode />;
};

export default ScrollPage;
