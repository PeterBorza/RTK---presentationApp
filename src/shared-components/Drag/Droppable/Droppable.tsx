import React from "react";
import { useDroppable } from "@dnd-kit/core";

import classNames from "classnames";
import styles from "./Droppable.module.scss";

interface DroppableProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const Droppable = ({ id, className, children }: DroppableProps) => {
    const { isOver, setNodeRef } = useDroppable({ id });
    const wrapper = classNames(className, {
        [styles.isOver]: isOver,
    });
    return (
        <div className={wrapper} ref={setNodeRef}>
            {children}
        </div>
    );
};

export default Droppable;
