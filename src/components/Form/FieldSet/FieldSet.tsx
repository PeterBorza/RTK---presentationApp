import { FC, ReactNode } from "react";
import styles from "./FieldSet.module.scss";

interface FieldSetProps {
	legend: string;
	renderBoxes: () => ReactNode;
}

const FieldSet: FC<FieldSetProps> = ({ legend, renderBoxes }) => {
	return (
		<fieldset className={styles.fieldSet}>
			<legend>{legend}</legend>
			<div className={styles.checkboxWrapper}>{renderBoxes()}</div>
		</fieldset>
	);
};

export default FieldSet;
