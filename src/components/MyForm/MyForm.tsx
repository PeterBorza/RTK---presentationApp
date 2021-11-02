import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
	memoryGameState,
	resetPair,
	addToPair,
} from "../memoryGame-story/memoryGameSlice";

import { InputCard } from "../../reusables/InputCard";

const Form: React.FC = () => {
	const dispatch = useDispatch();
	const memoryGame = useSelector(memoryGameState);
	const [text, setText] = useState("");

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(addToPair(text));
		setText("");
	};
	return (
		<form onSubmit={(e: React.SyntheticEvent) => submitHandler(e)}>
			<InputCard
				onChange={e => console.log(e.target)}
				value='ghfjdk'
				inputName='blank'
				isButton
				isDark
			/>
			<InputCard
				onChange={e => console.log(e.target)}
				value='ghfjdk'
				isButton
				inputName='textInput'
			/>
			<div>
				<button type='submit'>Add</button>
				<button onClick={() => dispatch(resetPair())}>reset</button>
			</div>
			{memoryGame.pair.map(p => (
				<p key={p}>{p}</p>
			))}
		</form>
	);
};

export default Form;
