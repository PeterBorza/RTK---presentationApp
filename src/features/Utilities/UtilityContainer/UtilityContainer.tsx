import React, { FC, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { AsidePlatform } from "shared-components";
import { UtilityTableLabels as messages } from "..";
import { getHomeLabel, LinkUrls, toggleUtils, useAppRedux, NavLinkUrls } from "app";

import styles from "./UtilityContainer.module.scss";

const UtilityContainer: FC = () => {
    const { isDarkMode, isUtilsOpen, dispatch } = useAppRedux();
    const links = [LinkUrls.GAS, LinkUrls.LIGHT, NavLinkUrls.UTILITIES, NavLinkUrls.HOME];

    const closeSidePanel = () => dispatch(toggleUtils(false));
    const openSidePanel = () => dispatch(toggleUtils(true));

    const platformBody = useMemo(
        () => (
            <>
                {links.map(item => (
                    <Link
                        key={`utility-link-${item}`}
                        to={item === NavLinkUrls.UTILITIES ? "/" + item : item}
                    >
                        <span className={styles.sideBarLinks} onClick={closeSidePanel}>
                            {getHomeLabel(item)}
                        </span>
                    </Link>
                ))}
            </>
        ),
        [links],
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
