import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postBubble } from "./thunks";
import { TextInput, FadedModal, Form, Button } from "../../reusables";
import { starterBubble } from "./state";
import { BubbleFormValues } from "./constants";
import { toggleBubbleFormModal } from "./bubbleSlice";
import { bubbleModalFormSelector } from "./selectors";

const BubbleForm = () => {
	const [bub, setBub] = useState(starterBubble);
	const isFormOpen = useSelector(bubbleModalFormSelector);
	const dispatch = useDispatch();

	const onCancelHandler = () => {
		setBub(starterBubble);
		dispatch(toggleBubbleFormModal(false));
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
		dispatch(toggleBubbleFormModal(false));
	};

	const onOpenHandler = () => {
		dispatch(toggleBubbleFormModal(true));
	};

	const labels: string[] = Object.keys(bub);
	const values: string[] = Object.values(bub);

	const renderFields = () => {
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
		<>
			<Button
				value={BubbleFormValues.BUTTON_LABEL}
				onClick={onOpenHandler}
			/>

			<FadedModal isOpen={isFormOpen}>
				<Form
					onSubmit={onSubmitHandler}
					width={BubbleFormValues.FORM_WIDTH}
					renderFields={renderFields}
					onCancel={onCancelHandler}
					formTitle={BubbleFormValues.FORM_TITLE}
				/>
			</FadedModal>
		</>
	);
};

export default BubbleForm;
