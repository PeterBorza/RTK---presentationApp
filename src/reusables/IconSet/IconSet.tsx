import React, { FC } from "react";
import { Check, Exclamation, Trash, Edit } from "../../utils/icons";
import styles from "./IconSet.module.scss";

interface IconSetProps {
	onCheck: () => void;
	onDelete: () => void;
	onEdit: () => void;
	isChecked: boolean;
}

const IconSet: FC<IconSetProps> = ({
	onCheck,
	onDelete,
	onEdit,
	isChecked,
}) => {
	return (
		<div className={styles.iconWrapper}>
			{isChecked ? (
				<>
					<Check
						className={styles.green}
						onClick={onCheck}
						title='checked'
					/>
					<Trash
						className={styles.black}
						title='delete'
						onClick={onDelete}
					/>
					<Edit
						className={styles.blue}
						title='edit'
						onClick={onEdit}
					/>
				</>
			) : (
				<>
					<Exclamation
						className={styles.red}
						onClick={onCheck}
						title='unchecked'
					/>
					<Trash
						className={styles.black}
						title='delete'
						onClick={onDelete}
					/>
					<Edit
						className={styles.blue}
						title='edit'
						onClick={onEdit}
					/>
				</>
			)}
		</div>
	);
};

export default IconSet;
