import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getBubbles, deleteBubble } from "./thunks";
import { Url } from "../../app/constants";

import { SideBarContext } from "../../context";
import Bubble from "./Bubble";
import BubbleForm from "./BubbleForm";
import { Loader, Button, Error } from "../../reusables";
import { selectBubble } from "./bubbleSlice";
import { AsidePlatform } from "../../reusables";

import styles from "./BubbleWrapper.module.scss";

const BubbleWrapper: React.FC = () => {
	const [isOpen] = useContext(SideBarContext);
	const { bubbles } = useSelector(bubbleState);
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
						value={isLoading ? message : "Get Bubbles"}
						isDisabled={isBubbles}
					/>
					{isBubbles && <BubbleForm />}
				</div>
				{isLoading ? (
					<Loader dots={5} />
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
