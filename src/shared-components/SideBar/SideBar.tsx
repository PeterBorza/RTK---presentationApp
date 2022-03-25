import Bar from "./subcomponents";

import classNames from "classnames";
import styles from "./SideBar.module.scss";
export interface SideBarProps {
    visible?: boolean;
    isOpen: boolean;
    onClose: () => void;
    renderBody: () => React.ReactNode;
    label: string;
}

const SideBar = ({ visible = false, isOpen, onClose, renderBody, label }: SideBarProps) => {
    const sideBarClassNames = classNames(styles.wrapper, {
        [styles.wrapper__open]: isOpen,
        [styles.noDisplay]: !visible,
    });

    return (
        <Bar className={sideBarClassNames}>
            <Bar.Header onClose={onClose} label={label} />
            <Bar.Body renderBody={renderBody} />
            <Bar.Footer />
        </Bar>
    );
};

export default SideBar;
