import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useAppRedux, togglePhotos, NavLinkUrls } from "app";
import { useLinkContext } from "providers";

import { AnimatedDropdown, AsidePlatform } from "shared-components";

import { MemoryGameMessages as messages, PhotosMessages } from "../Game/redux/messages";
import { useMGameRedux } from "../Game/redux/selectors";

import classNames from "classnames";
import styles from "./Photos.module.scss";

const Photos = () => {
    const { toInternalLink } = useLinkContext();
    const { photos, dispatch } = useMGameRedux();
    const { isPhotosOpen: openSideBar, isDarkMode } = useAppRedux();

    const closeSidePanel = () => dispatch(togglePhotos(false));
    const openSidePanel = () => dispatch(togglePhotos(true));

    //  TODO Photos and Photo with landing page do not belong to memorygame!! extract and images // folder as well

    const links = photos.map(photo => (
        <Link className={styles.links} key={photo.id} to={photo.id}>
            <span>{photo.caption}</span>
        </Link>
    ));

    const renderMenu = () => {
        const classes = classNames(styles.linkWrapper, "anchor-g");
        return (
            <>
                <div className={classes}>
                    <AnimatedDropdown label="photos" items={links} />
                    <br />
                </div>
                <Link to={toInternalLink(NavLinkUrls.PHOTOS)} className={styles.links}>
                    <span onClick={closeSidePanel}>{PhotosMessages.RETURN_LINK}</span>
                </Link>
            </>
        );
    };

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={closeSidePanel}
            label={messages.HEADER_LABEL}
            renderSideBar={renderMenu}
            onOpen={openSidePanel}
            buttonLabel={PhotosMessages.BUTTON_LABEL}
            isDarkMode={isDarkMode}
        >
            <Outlet />
        </AsidePlatform>
    );
};

export default Photos;
