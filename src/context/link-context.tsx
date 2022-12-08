import React, { createContext, useContext, useMemo } from "react";

import { LinkUrls } from "app/constants";

const LinkContext = createContext<string[]>([]);

export const LinkContextProvider: React.FC = ({ children }) => {
    const context = useMemo(
        () => [LinkUrls.HOME, LinkUrls.UTILITIES, LinkUrls.PHOTOS, LinkUrls.SCROLL],
        [],
    );

    return <LinkContext.Provider value={context}>{children}</LinkContext.Provider>;
};

export const toInternalLink = (link: LinkUrls) => `/${link}`;

export const useLinkContext = () => useContext(LinkContext);
