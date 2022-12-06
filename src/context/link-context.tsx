import React, { createContext, useContext, useMemo } from "react";

import { LinkUrls } from "app/constants";

const LinkContext = createContext<string[]>([]);

export const LinkContextProvider: React.FC = ({ children }) => {
    const context = useMemo(() => {
        const initialLinkContext = [
            LinkUrls.HOME,
            LinkUrls.UTILITIES,
            LinkUrls.PHOTOS,
            LinkUrls.SCROLL,
        ];
        return initialLinkContext;
    }, []);

    return <LinkContext.Provider value={context}>{children}</LinkContext.Provider>;
};

export const useLinkContext = () => useContext(LinkContext);
