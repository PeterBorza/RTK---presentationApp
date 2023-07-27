import React, { useState } from "react";
import { DragOverlay } from "@dnd-kit/core";

import { useAppRedux } from "app";
import { Button, Draggable, Droppable, SimpleDrag, SortableDrag } from "shared-components";

import classNames from "classnames";
import styles from "./DragContainer.module.scss";

interface DragObjectType {
    id: string;
    label: string;
}

const DragContainer = () => {
    const { container, container__darkMode: dark } = styles;

    const dragObject: DragObjectType[] = [
        {
            id: "one",
            label: "alpha",
        },
        {
            id: "two",
            label: "beta",
        },
        {
            id: "three",
            label: "gamma",
        },
        {
            id: "four",
            label: "delta",
        },
    ];

    const strings = [
        "alpha",
        "ro",
        "nu",
        "omega",
        "epsilon",
        "beta",
        "gamma",
        "delta",
        "teta",
        "sdgfhng",
        "sdgfb",
        "xbd",
        "gfdgnfsh",
        "asfdgbfngfh",
        "dfvbdf",
        "xzv cvcnzbf",
    ];
    const dragObjectIds = dragObject.map(obj => obj.id);
    const [dragStrings, setDragStrings] = useState(strings);
    const [dropItems, setDropItems] = useState<string[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);
    const { isDarkMode } = useAppRedux();

    const classes = (isDragging: boolean) =>
        classNames(styles.dragCard, {
            [styles.isDragging]: isDragging,
        });

    const onDragEndHandler = (id: string) => {
        setDragStrings(items => items.filter(item => item !== id));
        setDropItems(items => [...items, id]);
        setActiveId(null);
    };

    const matchingStringId = (id: string) => {
        return strings.find(objId => id === objId) || "";
    };

    const matchingDragObjectId = (id: string) => {
        return dragObject.find(obj => obj.id === id)?.label;
    };

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            <SimpleDrag onDragEnd={onDragEndHandler} onDragStart={id => setActiveId(id)}>
                <div className={styles.listCont}>
                    {dragStrings.map(str => (
                        <Draggable key={str} id={str} className={styles.dragCard} />
                    ))}
                </div>
                <DragOverlay>
                    {activeId ? (
                        <div className={styles.dragCard}>{matchingStringId(activeId)}</div>
                    ) : null}
                </DragOverlay>
                <Droppable id="drop-container">
                    <SortableDrag
                        className={styles.listCont}
                        items={dropItems}
                        onDragEnd={items => setDropItems(items)}
                        sortableItem={(id, isDragging) => (
                            <div className={classes(Boolean(isDragging))}>
                                {matchingStringId(id)}
                            </div>
                        )}
                    />
                </Droppable>
            </SimpleDrag>
            <Button
                value="Reset"
                onClick={() => {
                    setDragStrings(strings);
                    setDropItems([]);
                }}
            />
        </div>
    );
};

export default DragContainer;
