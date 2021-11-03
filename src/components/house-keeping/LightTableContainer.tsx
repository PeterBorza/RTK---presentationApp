import { Lumina } from "./LightCard";
import { lightState } from "./selectors";
import { selectLight } from "./houseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../reusables/ScrollTable";

const LightTableContainer = () => {
	const dispatch = useDispatch();
	const light = useSelector(lightState);

	const onLightClickHandler = (id: string) => {
		dispatch(selectLight(id));
	};

	const lightCards = () => {
		return light.map(item => (
			<li key={item.id}>
				<Lumina
					{...item}
					onClick={() => onLightClickHandler(item.id)}
				/>
			</li>
		));
	};

	return <Table renderBody={() => lightCards()} />;
};

export default LightTableContainer;
