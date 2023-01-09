import React, { createContext, useContext, useMemo, useState } from "react";

import { NavLinkUrls } from "app";

interface LinkContextType {
    links: NavLinkUrls[];
    toInternalLink: (link: NavLinkUrls) => string;
}

const init = {
    links: [],
    toInternalLink: () => "",
};

const LinkContext = createContext<LinkContextType>(init);

export const LinkContextProvider: React.FC = ({ children }) => {
    const links = Object.values(NavLinkUrls);
    const toInternalLink = (link: NavLinkUrls) => `/${link}`;

    const context: LinkContextType = useMemo(() => {
        return {
            links,
            toInternalLink,
        } as LinkContextType;
    }, [links, toInternalLink]);

    return <LinkContext.Provider value={context}>{children}</LinkContext.Provider>;
};

export const useLinkContext = () => useContext(LinkContext);
