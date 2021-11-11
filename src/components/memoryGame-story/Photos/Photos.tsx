import { FC } from "react";

import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { photoSelector } from "..";

import styles from "./Photos.module.scss";

const Photos: FC = () => {
	const photos = useSelector(photoSelector);

	const renderLinks = photos.map(photo => (
		<Link key={photo.id} to={photo.id}>
			{photo.caption}
		</Link>
	));

	return (
		<div className={styles.container}>
			<div className={styles.linkWrapper}>{renderLinks}</div>
			<Outlet />
		</div>
	);
};

export default Photos;
