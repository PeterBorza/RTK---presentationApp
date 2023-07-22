import React, { ReactNode, useState } from "react";

import { useAppRedux } from "app";

import styles from "./Home.module.scss";
import { AnimatedDropdown, TabMenu, Drag, SortableItem } from "shared-components";
import { createArray } from "utils/generators";
import classNames from "classnames";
import { DragItemsType } from "shared-components/Drag/Drag";

// import * as React from 'react';
// import {useMemo, useState} from 'react';
import * as ReactDOM from "react-dom";

import {
    DndContext,
    useDraggable,
    useDroppable,
    UniqueIdentifier,
    DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

const { container, container__darkMode: dark } = styles;

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

const objectToDrag = [
    {
        id: 1,
        label: "one",
    },
    {
        id: 2,
        label: "two",
    },
    {
        id: 3,
        label: "three",
    },
    {
        id: 4,
        label: "four",
    },
];
const Home = () => {
    const [dragStrings, setDragStrings] = useState(strings);
    const { isDarkMode } = useAppRedux();
    // const dropItems: ReactNode[] = createArray(10)
    //     .fill("item")
    //     .map((t, i) => t + (i + 1));

    const draggableItemList = dragStrings.map(item => {
        const classes = (isDragging: boolean) =>
            classNames(styles.sortableItem, {
                [styles.isDragging]: isDragging,
            });
        return (
            <SortableItem
                key={item}
                id={item}
                getContent={isDragging => <div className={classes(isDragging)}>{item}</div>}
            />
        );
    });

    const Playground = () => {
        const containers = ["A", "B", "C"];
        const [parent, setParent] = useState<UniqueIdentifier | null>(null);

        const item = <Draggable />;

        return (
            <DndContext onDragEnd={handleDragEnd}>
                {parent === null ? item : null}

                <div style={{ display: "flex" }}>
                    {containers.map(id => (
                        <Droppable key={id} id={id}>
                            {parent === id ? item : "Drop here"}
                        </Droppable>
                    ))}
                </div>
            </DndContext>
        );

        function handleDragEnd(event: DragEndEvent) {
            const { over } = event;

            setParent(over ? over.id : null);
        }
    };

    function Draggable() {
        const { attributes, isDragging, transform, setNodeRef, listeners } = useDraggable({
            id: "draggable-item",
        });

        return (
            <button
                ref={setNodeRef}
                style={{
                    transform: CSS.Translate.toString(transform),
                    boxShadow: isDragging
                        ? "-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
                        : undefined,
                }}
                {...attributes}
                {...listeners}
            >
                Drag me
            </button>
        );
    }

    interface DroppableProps {
        children: React.ReactNode;
        id: string;
    }

    function Droppable({ id, children }: DroppableProps) {
        const { isOver, setNodeRef } = useDroppable({ id });

        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 150,
                    height: 150,
                    border: "1px solid",
                    margin: 20,
                    borderColor: isOver ? "#4c9ffe" : "#EEE",
                }}
                ref={setNodeRef}
            >
                {children}
            </div>
        );
    }

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            <Drag items={dragStrings} onDragEnd={items => setDragStrings(items)}>
                <div className={styles.sortableContainer}>{draggableItemList}</div>
            </Drag>
            {/* <div className={styles.dropContainer}>
                    <AnimatedDropdown label="tester component" items={[...dropItems, "reset"]} />
                </div>
                <TabMenu darkMode={isDarkMode} menuItems={strings} /> */}
            {/* <Playground /> */}
        </div>
    );
};

export default Home;
