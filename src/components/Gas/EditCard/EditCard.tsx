import React, { FC } from "react";
import { useSelector } from "react-redux";

import { selectedGas } from "../selectors";

import styles from "./EditCard.module.scss";

const EditCard: FC = () => {
	const selected = useSelector(selectedGas);
	console.log(selected);

	return <div>boom</div>;
};

export default EditCard;
