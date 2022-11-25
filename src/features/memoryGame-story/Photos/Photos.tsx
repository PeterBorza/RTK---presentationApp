import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { photoSelector } from "..";
import { togglePhotos } from "app/appSlice";
import { photosOpenSelector } from "app/selectors";
import { AsidePlatform, Button } from "shared-components";
import { MemoryGameMessages as messages } from "../messages";

import styles from "./Photos.module.scss";

const Photos = () => {
    const dispatch = useDispatch();
    const photos = useSelector(photoSelector);
    const openSideBar = useSelector(photosOpenSelector);

    const renderLinks = photos.map(photo => (
        <Link className={styles.links} key={photo.id} to={photo.id}>
            {photo.caption}
        </Link>
    ));

    const sideBarContent = () => <div className={styles.linkWrapper}>{renderLinks}</div>;

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(togglePhotos(false))}
            label={messages.HEADER_LABEL}
            renderSideBar={sideBarContent}
        >
            <div className={styles.container}>
                <Button
                    className={styles.menuButton}
                    onClick={() => dispatch(togglePhotos(true))}
                    value={messages.MENU}
                    displayed={!openSideBar}
                />
                <Outlet />
            </div>
        </AsidePlatform>
    );
};

export default Photos;
