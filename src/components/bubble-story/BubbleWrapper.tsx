import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	bubbleState,
	errorState,
	pendingState,
	selectedBubble,
} from "./selectors";

import { getAsyncBubbles, postBubble, deleteBubble } from "./thunks";
import Bubble from "./Bubble/Bubble";
import Loader from "../../reusables/Loader";
import { selectBubble } from "./bubbleSlice";

import styles from "./BubbleWrapper.module.scss";
import { FormModal } from "../FormWrapper";
import Form from "../Form";
import { BubbleCssProps } from "./types";

const BubbleWrapper: React.FC = () => {
	const starterBubble = {
		left: "",
		top: "",
		size: "",
		opacity: "",
	};
	const [bub, setBub] = useState<BubbleCssProps>(starterBubble);
	const { bubbles } = useSelector(bubbleState);
	const selected = useSelector(selectedBubble);
	const { isLoading, message } = useSelector(pendingState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setBub(starterBubble);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "left":
				setBub({
					...bub,
					left: `${e.target.value}`,
				});
				break;
			case "top":
				setBub({
					...bub,
					top: `${e.target.value}`,
				});
				break;
			case "size":
				setBub({
					...bub,
					size: `${e.target.value}`,
				});
				break;
			case "opacity":
				setBub({
					...bub,
					opacity: `${e.target.value}`,
				});
				break;
			default:
				setBub(starterBubble);
		}
	};

	const onSubmitHandler = () => {
		const newBubble = {
			left: `${bub.left}%`,
			top: `${bub.top}%`,
			size: `${bub.size}px`,
			opacity: `${bub.opacity}`,
		};
		dispatch(postBubble(newBubble));
	};

	const renderInputs = () => {
		return (
			<>
				<Form.TextInput
					value={bub.left}
					name='left'
					onChange={onChangeHandler}
				/>
				<Form.TextInput
					value={bub.top}
					name='top'
					onChange={onChangeHandler}
				/>
				<Form.TextInput
					value={bub.size}
					name='size'
					onChange={onChangeHandler}
				/>
				<Form.TextInput
					value={bub.opacity}
					name='opacity'
					onChange={onChangeHandler}
				/>
			</>
		);
	};

	const handlers = {
		showBubbles: () => {
			bubbles.length === 0 && dispatch(getAsyncBubbles());
		},
		deleteSelected: () => selected && dispatch(deleteBubble(selected.id)),
		handleBubbleClick: (id: number) => dispatch(selectBubble(id)),
	};

	const { showBubbles, deleteSelected, handleBubbleClick } = handlers;

	return (
		<div className={styles.bubbleWrap}>
			<button onClick={deleteSelected}>Delete Selected Bubble</button>
			<button onClick={showBubbles}>Get Bubbles</button>
			{bubbles.length > 0 && (
				<FormModal
					render={() => renderInputs()}
					onSubmit={onSubmitHandler}
					onCancel={cancelHandler}
					buttonLabel='Add new Bubble'
				/>
			)}
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
			{error && <h2>{error}</h2>}
		</div>
	);
};

export default BubbleWrapper;
