import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
	bubbleSidePanelSelector,
} from "./selectors";

import { getBubbles, deleteBubble } from "./thunks";
import { Url } from "../../app/constants";

import Bubble from "./Bubble";
import BubbleForm from "./BubbleForm";
import { Loader, Button, Error } from "../../reusables";
import { selectBubble, toggleBubbleSidePanel } from "./bubbleSlice";
import { AsidePlatform } from "../../reusables";

import styles from "./BubbleWrapper.module.scss";

const BubbleWrapper: React.FC = () => {
	const { bubbles } = useSelector(bubbleState);
	const isOpen = useSelector(bubbleSidePanelSelector);
	const selected = useSelector(selectedBubble);
	const { isLoading, message } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const isBubbles = bubbles.length !== 0;

	const showBubbles = () => {
		if (isBubbles) return;
		dispatch(getBubbles(Url.BUBBLES));
	};

	const deleteSelected = () => {
		if (selected) {
			dispatch(deleteBubble(selected.id));
		}
	};

	const handleBubbleClick = (id: number) => {
		dispatch(selectBubble(id));
	};

	const handleOnClose = () => {
		dispatch(toggleBubbleSidePanel(false));
	};

	const handleOpenMenu = () => {
		dispatch(toggleBubbleSidePanel(true));
	};

	const render = () => {
		return (
			<>
				{isLoading && <Loader dots={5} />}
				<div className={styles.buttonWrapper}>
					<Button
						onClick={deleteSelected}
						value='Delete Selected Bubble'
						isDisabled={!selected}
					/>
					<Button
						onClick={showBubbles}
						value={isLoading ? message : "Get Bubbles"}
						isDisabled={isBubbles}
					/>
					{isBubbles && <BubbleForm />}
					<Button
						onClick={handleOpenMenu}
						value='Menu'
						isDisabled={!isBubbles}
					/>
				</div>
				{error.error ? (
					<Error message={error.message} />
				) : (
					bubbles.map(({ id, selected, cssProps }) => (
						<Bubble
							key={id}
							onClick={() => handleBubbleClick(id)}
							selected={selected}
							cssProps={cssProps}
							id={id}
						/>
					))
				)}
			</>
		);
	};

	return (
		<AsidePlatform
			isOpen={isOpen}
			renderBody={() => render()}
			onClose={handleOnClose}
		/>
	);
};

export default BubbleWrapper;
