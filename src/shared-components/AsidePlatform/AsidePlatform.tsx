import { Button, SideBar } from "..";

import classNames from "classnames";
import styles from "./AsidePlatform.module.scss";

export type Props = {
    isOpen: boolean;
    isDarkMode?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    renderSideBar: () => React.ReactNode;
    label: string;
    buttonLabel?: string;
};

const AsidePlatform: React.FC<Props> = ({
    isOpen,
    isDarkMode = false,
    children,
    onClose,
    onOpen,
    renderSideBar,
    label,
    buttonLabel = "Menu",
}) => {
    const wrapper = classNames(styles.container, {
        [styles["container__with-sidebar-open"]]: isOpen,
        [styles["container__dark-mode"]]: isDarkMode,
    });

    return (
        <section className={styles.layout}>
            <SideBar
                isOpen={isOpen}
                visible
                onClose={() => onClose && onClose()}
                renderBody={renderSideBar}
                label={label}
                isDarkMode={isDarkMode}
            />
            <div className={wrapper}>
                <Button
                    className={styles.menuButton}
                    onClick={onOpen}
                    displayed={!isOpen}
                    dark={isDarkMode}
                    value={buttonLabel}
                />
                {children}
            </div>
        </section>
    );
};

export default AsidePlatform;
