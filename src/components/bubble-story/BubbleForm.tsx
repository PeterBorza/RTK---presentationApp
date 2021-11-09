import { useState } from "react";
import { useDispatch } from "react-redux";

import { postBubble } from "./thunks";

import { FormModal } from "../FormWrapper";
import Form from "../Form";
import { BubbleCssProps } from "./types";

const BubbleForm = () => {
	const starterBubble: BubbleCssProps = {
		left: "",
		top: "",
		size: "",
		opacity: "",
	};
	const [bub, setBub] = useState(starterBubble);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setBub(starterBubble);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBub({
			...bub,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		const newBubble = {
			left: `${bub.left}%`,
			top: `${bub.top}%`,
			size: `${bub.size}px`,
			opacity: `${bub.opacity}`,
		};
		dispatch(postBubble(newBubble));
		setBub(starterBubble);
	};

	const labels: string[] = Object.keys(bub);
	const values: string[] = Object.values(bub);

	const renderInputs = () => {
		return (
			<>
				{labels.map((label, i) => (
					<Form.TextInput
						key={label}
						value={values[i]}
						name={label}
						onChange={onChangeHandler}
					/>
				))}
			</>
		);
	};
	return (
		<FormModal
			render={() => renderInputs()}
			onSubmit={onSubmitHandler}
			onCancel={cancelHandler}
			buttonLabel='Add new Bubble'
			formWidth='15'
		/>
	);
};

export default BubbleForm;
