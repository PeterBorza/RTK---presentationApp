import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { photoSelector } from "..";
import { togglePhotos } from "../../../app/appSlice";
import { photosOpenSelector } from "../../../app/selectors";
import { AsidePlatform, Button } from "../../../reusables";
import { MemoryGameMessages } from "../messages";

import styles from "./Photos.module.scss";

const Photos: FC = () => {
	const dispatch = useDispatch();
	const photos = useSelector(photoSelector);
	const openSideBar = useSelector(photosOpenSelector);

	const renderLinks = photos.map(photo => (
		<Link className={styles.links} key={photo.id} to={photo.id}>
			{photo.caption}
		</Link>
	));

	const sideBarContent = () => (
		<div className={styles.linkWrapper}>{renderLinks}</div>
	);

	const openMenu = () => {
		dispatch(togglePhotos(true));
	};
	const closeMenu = () => {
		dispatch(togglePhotos(false));
	};

	return (
		<AsidePlatform
			isOpen={openSideBar}
			onClose={() => closeMenu()}
			renderHeader={() => <p className={styles.title}>Cheat Sheets</p>}
			renderSideBar={() => sideBarContent()}
		>
			<div className={styles.container}>
				{!openSideBar && (
					<Button
						className={styles.menuButton}
						onClick={openMenu}
						value={MemoryGameMessages.MENU}
					/>
				)}
				<Outlet />
			</div>
		</AsidePlatform>
	);
};

export default Photos;
