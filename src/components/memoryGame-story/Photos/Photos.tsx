import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { photoSelector, toggleSidePanel } from "..";
import { AsidePlatform, Button } from "../../../reusables";
import { MemoryGameMessages } from "../messages";
import { sidePanelSelector } from "../selectors";

import styles from "./Photos.module.scss";

const Photos: FC = () => {
	const dispatch = useDispatch();
	const photos = useSelector(photoSelector);
	const open = useSelector(sidePanelSelector);

	const renderLinks = photos.map(photo => (
		<Link className={styles.links} key={photo.id} to={photo.id}>
			{photo.caption}
		</Link>
	));

	const sideBarContent = () => {
		return <div className={styles.linkWrapper}>{renderLinks}</div>;
	};

	const renderHeader = () => {
		return <p>Cheat Sheets</p>;
	};

	const openMenu = () => {
		dispatch(toggleSidePanel(true));
	};
	const closeMenu = () => {
		dispatch(toggleSidePanel(false));
	};

	return (
		<AsidePlatform
			isOpen={open}
			onClose={() => closeMenu()}
			renderHeader={() => renderHeader()}
			renderSideBar={() => sideBarContent()}
		>
			<div className={styles.container}>
				{!open && (
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
