import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
	bubbleSidePanelSelector,
} from "./selectors";

import { getBubbles, deleteBubble } from "./thunks";

import { Url } from "../../app/constants";
import { BubbleButtons, BubbleSideBarTitle, BubbleValues } from "./constants";

import Bubble from "./Bubble";
import BubbleForm from "./BubbleForm";
import { SelectedBubble } from ".";
import {
	Loader,
	Button,
	Error,
	AsidePlatform,
	ButtonWrapper,
	LoadingWrapper,
} from "../../reusables";

import { selectBubble, toggleBubbleSidePanel } from "./bubbleSlice";

import classNames from "classnames";
import styles from "./BubbleWrapper.module.scss";

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

	const handleBubbleClick = useCallback(
		(id: number) => {
			dispatch(selectBubble(id));
			dispatch(toggleBubbleSidePanel(true));
		},
		[dispatch]
	);

	const handleOnClose = () => {
		dispatch(toggleBubbleSidePanel(false));
	};

	const handleOpenMenu = useCallback(() => {
		dispatch(toggleBubbleSidePanel(true));
	}, [dispatch]);

	const sideBarHeaderTitle = () => <h3>{BubbleSideBarTitle.TITLE}</h3>;
	const sideBarBody = () =>
		selected ? (
			<SelectedBubble selected={selected} />
		) : (
			<h4>{BubbleValues.SELECT}</h4>
		);

	const buttons = [
		{
			id: uuid(),
			onClick: showBubbles,
			value: isLoading ? <Loader dots={5} /> : `${BubbleButtons.FETCH}`,
			isDisabled: isBubbles,
		},
		{
			id: uuid(),
			onClick: handleOpenMenu,
			value: `${BubbleButtons.MENU}`,
			isDisabled: !isBubbles,
		},
		{
			id: uuid(),
			onClick: deleteSelected,
			value: `${BubbleButtons.DELETE}`,
			isDisabled: !selected,
		},
	];

	const getButtons = buttons.map(item => (
		<Button
			key={item.id}
			onClick={item.onClick}
			value={item.value}
			isDisabled={item.isDisabled}
		/>
	));

	const renderButtons = () => {
		return (
			<>
				{getButtons}
				{isBubbles && <BubbleForm />}
			</>
		);
	};

	const renderBubbleContent = () => {
		return (
			<div className={wrapper}>
				<ButtonWrapper renderButtons={renderButtons} />
				{isLoading && <LoadingWrapper loading={isLoading} />}
				{error.error ? (
					<Error message={error.message} />
				) : (
					bubbles.map(({ id, selected, cssProps }) => (
						<Bubble
							key={id}
							onClick={() => handleBubbleClick(id)}
							title={BubbleValues.TITLE}
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
			renderBody={renderBubbleContent}
			onClose={handleOnClose}
			renderHeader={sideBarHeaderTitle}
			renderSideBar={sideBarBody}
		/>
	);
};

export default BubbleWrapper;
