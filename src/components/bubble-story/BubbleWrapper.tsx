import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getAsyncBubbles, deleteBubble } from "./thunks";
import { SideBarContext } from "../../context";

import Bubble from "./Bubble";
import BubbleForm from "./BubbleForm";
import { Loader, Button, Error, SideBar } from "../../reusables";
import { selectBubble } from "./bubbleSlice";
import { AsidePlatform } from "../../reusables";

import styles from "./BubbleWrapper.module.scss";

const BubbleWrapper: React.FC = () => {
	const [isOpen, setIsOpen] = useContext(SideBarContext);

	const { bubbles } = useSelector(bubbleState);
	const selected = useSelector(selectedBubble);
	const { isLoading, message } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const isBubbles = bubbles.length !== 0;

	// *****************************************************************************

	const showBubbles = () => {
		if (isBubbles) return;
		dispatch(getAsyncBubbles());
	};

	const deleteSelected = () => {
		if (selected) {
			dispatch(deleteBubble(selected.id));
		}
	};

	const handleBubbleClick = (id: number) => {
		dispatch(selectBubble(id));
	};

	const render = () => {
		return (
			<>
				<div className={styles.buttonWrapper}>
					<Button
						onClick={deleteSelected}
						value='Delete Selected Bubble'
						isDisabled={!selected}
					/>
					<Button
						onClick={showBubbles}
						value='Get Bubbles'
						isDisabled={isBubbles}
					/>
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
			</>
		);
	};

	return <AsidePlatform isOpen={isOpen} renderBody={() => render()} />;
};

export default BubbleWrapper;
