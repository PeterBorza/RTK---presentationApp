import { FC } from "react";
import { icons } from "../../utils";

import classNames from "classnames";
import styles from "./IconSet.module.scss";

interface IconSetProps {
	onCheck: () => void;
	onDelete: () => void;
	onEdit: () => void;
	isChecked: boolean;
	className?: string;
}

const IconSet: FC<IconSetProps> = ({
	onCheck,
	onDelete,
	onEdit,
	isChecked,
	className,
}) => {
	const iconClasses = classNames(styles.iconWrapper, className);
	return (
		<div className={iconClasses}>
			{isChecked ? (
				<>
					<icons.Check
						className={styles.green}
						onClick={onCheck}
						title='checked'
					/>
					<icons.Trash
						className={styles.black}
						title='delete'
						onClick={onDelete}
					/>
					<icons.Edit
						className={styles.blue}
						title='edit'
						onClick={onEdit}
					/>
				</>
			) : (
				<>
					<icons.Exclamation
						className={styles.red}
						onClick={onCheck}
						title='unchecked'
					/>
					<icons.Trash
						className={styles.black}
						title='delete'
						onClick={onDelete}
					/>
					<icons.Edit
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
