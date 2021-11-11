import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getAsyncBubbles, deleteBubble } from "./thunks";
import Bubble from "./Bubble";
import BubbleForm from "./BubbleForm";
import { Loader, Button, Error } from "../../reusables";
import { selectBubble } from "./bubbleSlice";

import styles from "./BubbleWrapper.module.scss";

const BubbleWrapper: React.FC = () => {
	const { bubbles } = useSelector(bubbleState);
	const selected = useSelector(selectedBubble);
	const { isLoading, message } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const isBubbles = bubbles.length !== 0;

	const handlers = {
		showBubbles: () => {
			!isBubbles && dispatch(getAsyncBubbles());
		},
		deleteSelected: () => selected && dispatch(deleteBubble(selected.id)),
		handleBubbleClick: (id: number) => dispatch(selectBubble(id)),
	};

	const { showBubbles, deleteSelected, handleBubbleClick } = handlers;

	return (
		<div className={styles.container}>
			<div className={styles.buttonWrapper}>
				<Button
					onClick={deleteSelected}
					value='Delete Selected Bubble'
				/>
				<Button onClick={showBubbles} value='Get Bubbles' />
				{isBubbles && <BubbleForm />}
			</div>
			{isLoading ? (
				<>
					<h2>{message}</h2>
					<Loader dots={5} />
				</>
			) : (
				bubbles.map(item => (
					<Bubble
						key={item.id}
						onClick={() => handleBubbleClick(item.id)}
						selected={item.selected}
						cssProps={item.cssProps}
						id={item.id}
					/>
				))
			)}
			{error && <Error message={error} />}
		</div>
	);
};

export default BubbleWrapper;
