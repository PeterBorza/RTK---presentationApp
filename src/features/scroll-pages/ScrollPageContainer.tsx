import { useContext } from "react";

import { ScrollPage } from "shared-components";
import { PagesContext } from "context/pages-context";

const ScrollPageContainer = () => {
    const myPages = useContext(PagesContext);
    return <ScrollPage pages={myPages} />;
};

export default ScrollPageContainer;
