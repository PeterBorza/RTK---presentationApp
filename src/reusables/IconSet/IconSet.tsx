import { FC } from "react";
import { icons } from "../../utils";

import classNames from "classnames";
import styles from "./IconSet.module.scss";

interface IconSetProps {
	onCheck: () => void;
	onDelete: () => void;
	onEdit: () => void;
	isChecked: boolean;
	isEdited: boolean;
	className?: string;
}

const IconSet: FC<IconSetProps> = ({
	onCheck,
	onDelete,
	onEdit,
	isChecked,
	isEdited,
	className,
}) => {
	const iconClasses = classNames(styles.iconWrapper, className);
	const editClass = isEdited ? `${styles.red}` : ` ${styles.blue}`;
	return (
		<div className={iconClasses}>
			{isChecked ? (
				<icons.Check
					className={styles.green}
					onClick={onCheck}
					title='checked'
				/>
			) : (
				<icons.Exclamation
					className={styles.red}
					onClick={onCheck}
					title='unchecked'
				/>
			)}
			<icons.Trash
				className={styles.black}
				title='delete'
				onClick={onDelete}
			/>
			<icons.Edit className={editClass} title='edit' onClick={onEdit} />
		</div>
	);
};

export default IconSet;
