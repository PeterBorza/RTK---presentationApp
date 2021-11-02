import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getAsyncBubbles, postBubble, deleteBubble } from "./thunks";
import Bubble from "./Bubble/Bubble";
import Loader from "../../reusables/Loader/Loader";
import { selectBubble } from "./bubbleSlice";

import styles from "./BubbleWrapper.module.scss";

const BubbleWrapper: React.FC = () => {
	const { bubbles } = useSelector(bubbleState);
	const selected = useSelector(selectedBubble);
	const { isLoading, message } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const newBubble = [
		{
			left: "80%",
			top: "75%",
			size: "80px",
			opacity: "1",
		},
		{
			left: "15%",
			top: "75%",
			size: "80px",
			opacity: "1",
		},
	];

	const handlers = {
		showBubbles: () => {
			bubbles.length === 0 && dispatch(getAsyncBubbles());
		},
		deleteSelected: () => selected && dispatch(deleteBubble(selected.id)),
		addNewBubble: () =>
			bubbles.length > 0 && dispatch(postBubble(newBubble[1])),
		handleBubbleClick: (id: number) => dispatch(selectBubble(id)),
	};

	const { showBubbles, deleteSelected, addNewBubble, handleBubbleClick } =
		handlers;

	return (
		<div className={styles.bubbleWrap}>
			<button onClick={deleteSelected}>Delete Selected Bubble</button>
			<button onClick={addNewBubble}>Add Bubble</button>
			<button onClick={showBubbles}>Show Bubbles</button>
			{isLoading ? (
				<>
					<h2>{message}</h2>
					<Loader dots={15} />
				</>
			) : (
				bubbles.map(item => (
					<Bubble
						onClick={() => handleBubbleClick(item.id)}
						key={item.id}
						props={item}
					/>
				))
			)}
			{error && <h2>{error}</h2>}
		</div>
	);
};

export default BubbleWrapper;
