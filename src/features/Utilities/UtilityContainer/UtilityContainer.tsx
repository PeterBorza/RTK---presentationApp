import React, { FC, useCallback, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { urlToLabel, LinkUrls, toggleUtils, useAppRedux, NavLinkUrls } from "app";
import { AsidePlatform } from "shared-components";

import { UtilityTableLabels as messages } from "..";

import styles from "./UtilityContainer.module.scss";
import { useLinkContext } from "context";

const UtilityContainer: FC = () => {
    const links = useMemo(
        () => [LinkUrls.GAS, LinkUrls.LIGHT, NavLinkUrls.UTILITIES, NavLinkUrls.HOME],
        [],
    );
    const { toInternalLink } = useLinkContext();
    const { isDarkMode, isUtilsOpen, dispatch } = useAppRedux();

    const closeSidePanel = useCallback(() => dispatch(toggleUtils(false)), [dispatch]);
    const openSidePanel = () => dispatch(toggleUtils(true));

    const platformBody = useMemo(
        () => (
            <>
                {links.map(item => (
                    <Link
                        key={`utility-link-${item}`}
                        to={item === NavLinkUrls.UTILITIES ? toInternalLink(item) : item}
                    >
                        <span className={styles.sideBarLinks} onClick={closeSidePanel}>
                            {urlToLabel(item)}
                        </span>
                    </Link>
                ))}
            </>
        ),
        [links, closeSidePanel, toInternalLink],
    );

    return (
        <AsidePlatform
            isOpen={isUtilsOpen}
            onClose={closeSidePanel}
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
