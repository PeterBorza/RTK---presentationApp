import { Link, Outlet } from "react-router-dom";
import { togglePhotos } from "app/appSlice";
import { useAppRedux } from "app";
import { AsidePlatform, Button } from "shared-components";
import { MemoryGameMessages as messages } from "../messages";

import styles from "./Photos.module.scss";
import { useMGameRedux } from "../selectors";

const Photos = () => {
    const { photos, dispatch } = useMGameRedux();
    const { isPhotosOpen: openSideBar } = useAppRedux();

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
