import React, { useCallback, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { useAppRedux, togglePhotos, NavLinkUrls } from "app";
import { useLinkContext } from "context/link-context";

import { AnimatedDropdown, AsidePlatform } from "shared-components";

import { MemoryGameMessages as messages, PhotosMessages } from "../Game/redux/messages";
import { useMGameRedux } from "../Game/redux/selectors";
import styles from "./Photos.module.scss";

const Photos = () => {
    const { toInternalLink } = useLinkContext();
    const { photos, dispatch } = useMGameRedux();
    const { isPhotosOpen: openSideBar, isDarkMode } = useAppRedux();

    const closeSidePanel = useCallback(() => dispatch(togglePhotos(false)), [dispatch]);
    const openSidePanel = useCallback(() => dispatch(togglePhotos(true)), [dispatch]);

    //  TODO Photos and Photo with landing page do not belong to memorygame!! extract and images // folder as well

    const renderLinks = useMemo(
        () => (
            <div className={styles.linkWrapper}>
                {photos.map(photo => (
                    <Link className={styles.links} key={photo.id} to={photo.id}>
                        <span>{photo.caption}</span>
                    </Link>
                ))}
                <br />
                <Link to={toInternalLink(NavLinkUrls.PHOTOS)} className={styles.links}>
                    <span onClick={closeSidePanel}>{PhotosMessages.RETURN_LINK}</span>
                </Link>
            </div>
        ),
        [photos, closeSidePanel, toInternalLink],
    );

    const links = photos.map(photo => (
        <Link className={styles.links} key={photo.id} to={photo.id}>
            <span>{photo.caption}</span>
        </Link>
    ));

    const renderMenu = () => {
        return (
            <>
                <div className={styles.linkWrapper}>
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
