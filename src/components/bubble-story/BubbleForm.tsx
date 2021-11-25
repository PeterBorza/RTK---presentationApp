import { useState } from "react";
import { useDispatch } from "react-redux";

import { postBubble } from "./thunks";
import { TextInput, ModalForm } from "../../reusables";
import { starterBubble } from "./state";
import { BubbleFormValues } from "../../app/constants";

const BubbleForm = () => {
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
					<TextInput
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
		<ModalForm
			render={renderInputs}
			onSubmit={onSubmitHandler}
			onCancel={cancelHandler}
			buttonLabel={BubbleFormValues.BUTTON_LABEL}
			formWidth={BubbleFormValues.FORM_WIDTH}
			formTitle={BubbleFormValues.FORM_TITLE}
		/>
	);
};

export default BubbleForm;
