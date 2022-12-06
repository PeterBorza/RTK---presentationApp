import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { AsidePlatform, Button } from "shared-components";
import { UtilityTableLabels as messages } from "..";
import { useAppRedux } from "app";

import styles from "./UtilityContainer.module.scss";
import { getHomeLabel, LinkUrls, toggleUtils } from "app";

const UtilityContainer: FC = () => {
    const { isDarkMode, isUtilsOpen, dispatch } = useAppRedux();
    const links = [LinkUrls.GAS, LinkUrls.LIGHT, LinkUrls.UTILITIES, LinkUrls.HOME];

    const closeSidePanel = () => dispatch(toggleUtils(false));
    const openSidePanel = () => dispatch(toggleUtils(true));

    const renderLinks = React.useMemo(
        () =>
            links.map(item => (
                <Link
                    key={`utility-link-${item}`}
                    to={item === LinkUrls.UTILITIES ? "/" + item : item}
                    onClick={closeSidePanel}
                >
                    {getHomeLabel(item)}
                </Link>
            )),
        [links],
    );

    const platformBody = () => <div className={styles.sideBarLinks}>{renderLinks}</div>;

    return (
        <AsidePlatform
            isOpen={isUtilsOpen}
            onClose={closeSidePanel}
            renderSideBar={platformBody}
            label={messages.HEADER_TITLE}
        >
            <Button
                className={styles.menuButton}
                onClick={openSidePanel}
                value={messages.MENU_BUTTON}
                displayed={!isUtilsOpen}
                dark={isDarkMode}
            />
            <Outlet />
        </AsidePlatform>
    );
};

export default UtilityContainer;
