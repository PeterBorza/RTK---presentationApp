import { FC } from "react";

import { FaWindowClose } from "react-icons/fa";

import classNames from "classnames";
import styles from "../SideBar.module.scss";

interface HeaderProps {
    className?: string;
    label: string;
    onClose: () => void;
}

const Header: FC<HeaderProps> = ({ className, label, onClose }) => {
    const wrapper = classNames(styles.header, className);
    return (
        <header className={wrapper}>
            <h3 className={styles.sideBarLabel}>{label}</h3>
            <FaWindowClose className={styles.toggle__close} onClick={onClose} />
        </header>
    );
};

export default Header;
