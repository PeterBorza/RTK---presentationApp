import styles from "./Loader.module.scss";

interface LoaderProps {
	dots: number;
	speed?: number;
}

const Loader: React.FC<LoaderProps> = ({ dots = 3, speed = 130 }) => {
	if (dots <= 1) return <h3>Count must be higher than 0</h3>;
	const dotCountArray = new Array(dots).fill(null).map((_, i) => i);

	return (
		<div className={styles.loader_bg}>
			<div className={styles.loader_dots}>
				{dotCountArray.map(item => (
					<div
						key={item}
						className={styles.dot}
						style={{ animationDelay: `${item * speed}ms` }}
					></div>
				))}
			</div>
		</div>
	);
};

export default Loader;
