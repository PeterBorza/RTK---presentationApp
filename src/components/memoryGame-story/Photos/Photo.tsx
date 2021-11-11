import { useParams } from "react-router";
import { photoSelector } from "..";
import { useSelector } from "react-redux";

import styles from "./Photos.module.scss";

const Photo = () => {
	const params = useParams();
	const photos = useSelector(photoSelector);

	const image = photos.find(img => img.id === params.id);

	return (
		<div className={styles.imageWrapper}>
			<img className={styles.imageStyle} src={image?.src} alt='' />
		</div>
	);
};

export default Photo;
