import HouseData from "./HouseData";
// import { useSelector } from "react-redux";

// import { HouseState } from "./houseSlice";

import styles from "./HouseKeepingWrapper.module.scss";

const HouseKeepingWrapper: React.FC = () => {
	// const dispatch = useDispatch();
	// const house = useSelector(HouseState);

	return (
		<div className={styles.container}>
			inside wrapper: <HouseData />
		</div>
	);
};

export default HouseKeepingWrapper;
