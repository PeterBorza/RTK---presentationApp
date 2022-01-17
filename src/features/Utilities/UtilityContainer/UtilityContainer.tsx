import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { toggleUtils } from "../../../app/appSlice";
import { Url } from "../../../app/constants";
import { darkModeSelector, utilsOpenSelector } from "../../../app/selectors";
import { AsidePlatform, Button } from "../../../shared-components";
import { UtilityTableLabels as messages } from "..";

import styles from "./UtilityContainer.module.scss";

const UtilityContainer: FC = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(darkModeSelector);
    const openSideBar = useSelector(utilsOpenSelector);

    const closeSidePanel = () => {
        dispatch(toggleUtils(false));
    };

    const openSidePanel = () => {
        dispatch(toggleUtils(true));
    };

    const platformBody = () => {
        return (
            <div className={styles.sideBarLinks}>
                <Link to={Url.GAS} onClick={closeSidePanel}>
                    {Url.GAS}
                </Link>
                <Link to={Url.LIGHT} onClick={closeSidePanel}>
                    {Url.LIGHT}
                </Link>
                <Link to={`/${Url.UTILITIES}`} onClick={closeSidePanel}>
                    {Url.HOME}
                </Link>
            </div>
        );
    };

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={closeSidePanel}
            renderSideBar={platformBody}
            label={messages.HEADER_TITLE}
        >
            <Button
                className={styles.menuButton}
                onClick={openSidePanel}
                value={messages.MENU_BUTTON}
                displayed={!openSideBar}
                dark={darkMode}
            />
            <Outlet />
        </AsidePlatform>
    );
};

export default UtilityContainer;
