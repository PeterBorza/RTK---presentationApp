import { FC, PropsWithChildren, ReactNode } from "react";

import { SideBar } from "..";

import classNames from "classnames";
import styles from "./AsidePlatform.module.scss";

export type Props = {
    isOpen: boolean;
    onClose: () => void;
    renderSideBar: () => ReactNode;
    label: string;
};

const AsidePlatform: FC<PropsWithChildren<Props>> = ({
    isOpen,
    children,
    onClose,
    renderSideBar,
    label,
}) => {
    const wrapper = classNames(styles.container, {
        [styles.container__margin]: isOpen,
    });

    return (
        <section className={styles.layout}>
            <SideBar
                isOpen={isOpen}
                visible
                onClose={onClose}
                renderBody={renderSideBar}
                label={label}
            />
            <div className={wrapper}>{children}</div>
        </section>
    );
};

export default AsidePlatform;
