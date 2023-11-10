import { useCallback, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { urlToLabel, LinkUrls, toggleUtils, useAppRedux, NavLinkUrls } from "app";
import { AsidePlatform } from "shared-components";

import { UtilityTableLabels as messages } from "..";

import styles from "./UtilityContainer.module.scss";
import { useLinkContext } from "providers";
import { getAsyncUtility } from "features/Gas/thunks";
import { getLight } from "features/Light/thunks";

type LinkType = LinkUrls | NavLinkUrls;

const UtilityContainer = () => {
    const links: LinkType[] = useMemo(
        () => [LinkUrls.GAS, LinkUrls.LIGHT, NavLinkUrls.UTILITIES, NavLinkUrls.HOME],
        [],
    );
    const { toInternalLink } = useLinkContext();
    const { isDarkMode, isUtilsOpen, dispatch } = useAppRedux();

    const closeSidePanel = useCallback(
        (item: LinkType) => {
            dispatch(toggleUtils(false));
            item === LinkUrls.GAS && dispatch(getAsyncUtility());
            item === LinkUrls.LIGHT && dispatch(getLight());
        },
        [dispatch],
    );
    const openSidePanel = () => dispatch(toggleUtils(true));

    const platformBody = useMemo(
        () => (
            <>
                {links.map(item => (
                    <Link
                        key={`utility-link-${item}`}
                        to={item === NavLinkUrls.UTILITIES ? toInternalLink(item) : item}
                    >
                        <span className={styles.sideBarLinks} onClick={() => closeSidePanel(item)}>
                            {urlToLabel(item)}
                        </span>
                    </Link>
                ))}
            </>
        ),
        [links, closeSidePanel, toInternalLink],
    );

    // TODO try and reduce data from server in utilities

    return (
        <AsidePlatform
            isOpen={isUtilsOpen}
            onClose={label => closeSidePanel(label as LinkType)}
            renderSideBar={() => platformBody}
            label={messages.HEADER_TITLE}
            isDarkMode={isDarkMode}
            onOpen={openSidePanel}
            buttonLabel={messages.MENU_BUTTON}
        >
            <Outlet />
        </AsidePlatform>
    );
};

export default UtilityContainer;
