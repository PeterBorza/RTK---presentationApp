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

import classNames from "classnames";
import styles from "./BubbleWrapper.module.scss";
import { useCallback } from "react";

type Props = {
	dark?: boolean;
};

const BubbleWrapper: React.FC<Props> = ({ dark = false }) => {
	const { bubbles } = useSelector(bubbleState);
	const isOpen = useSelector(bubbleSidePanelSelector);
	const selected = useSelector(selectedBubble);
	const { isLoading } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const buttonWrapper = classNames(styles.buttonWrapper, {
		[styles.buttonWrapper__dark]: dark,
	});
	const wrapper = classNames(styles.container, {
		[styles.container__dark]: dark,
	});

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

	const handleBubbleClick = (id: number) => dispatch(selectBubble(id));

	const handleOnClose = () => {
		dispatch(toggleBubbleSidePanel(false));
	};

	const handleOpenMenu = useCallback(() => {
		dispatch(toggleBubbleSidePanel(true));
	}, [dispatch]);

	const renderSB = () => {
		return (
			<Button
				onClick={deleteSelected}
				value='Delete Selected Bubble'
				isDisabled={!selected}
			/>
		);
	};

	const renderHDR = () => {
		return <h3>Building Menu</h3>;
	};

	const render = () => {
		return (
			<div className={wrapper}>
				<div className={buttonWrapper}>
					<Button
						onClick={showBubbles}
						value={isLoading ? <Loader dots={5} /> : "Get Bubbles"}
						isDisabled={isBubbles}
					/>
					<Button
						onClick={handleOpenMenu}
						value='Menu'
						isDisabled={!isBubbles}
					/>
					{isBubbles && <BubbleForm />}
				</div>
				{isLoading && <Loader dots={5} />}
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
			</div>
		);
	};

	return (
		<AsidePlatform
			isOpen={isOpen}
			renderBody={render}
			onClose={handleOnClose}
			renderSideBar={renderSB}
			renderHeader={renderHDR}
		/>
	);
};

export default BubbleWrapper;
