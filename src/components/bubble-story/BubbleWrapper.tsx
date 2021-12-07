import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getBubbles, deleteBubble } from "./thunks";

import { Url } from "../../app/constants";
import { BubbleMessages as msg } from "./constants";

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

import { selectBubble } from "./bubbleSlice";

import classNames from "classnames";
import styles from "./BubbleWrapper.module.scss";
import { toggleBubbles } from "../../app/appSlice";
import { bubblesOpenSelector } from "../../app/selectors";

type Props = {
	dark?: boolean;
};

const BubbleWrapper: React.FC<Props> = ({ dark = false }) => {
	const { bubbles } = useSelector(bubbleState);
	const openSideBar = useSelector(bubblesOpenSelector);
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

	const handleBubbleClick = (id: number) => {
		dispatch(selectBubble(id));
		dispatch(toggleBubbles(true));
	};

	const handleOnClose = () => {
		dispatch(toggleBubbles(false));
	};

	const handleOpenMenu = () => dispatch(toggleBubbles(!openSideBar));

	const sideBarHeaderTitle = () => <h3>{msg.TITLE}</h3>;

	const sideBarBody = () =>
		selected ? (
			<SelectedBubble selected={selected} />
		) : (
			<h4>{msg.SELECT}</h4>
		);

	const buttons = [
		{
			id: uuid(),
			onClick: handleOpenMenu,
			value: msg.MENU,
			isDisabled: !isBubbles,
		},
		{
			id: uuid(),
			onClick: showBubbles,
			value: isLoading ? <Loader dots={5} /> : msg.FETCH,
			isDisabled: isBubbles,
		},
		{
			id: uuid(),
			onClick: deleteSelected,
			value: msg.DELETE,
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
							title={msg.HOVER_TITLE}
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
			isOpen={openSideBar}
			onClose={handleOnClose}
			renderHeader={sideBarHeaderTitle}
			renderSideBar={sideBarBody}
		>
			{renderBubbleContent()}
		</AsidePlatform>
	);
};

export default BubbleWrapper;
