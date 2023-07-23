import React from "react";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
    SortableContext,
    SortingStrategy,
    arrayMove,
    horizontalListSortingStrategy,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

type Strategies = "horizontal" | "vertical";
export type DragItemsType = string[];

interface DragProps {
    items: DragItemsType;
    onDragEnd: (items: DragItemsType) => void;
    children?: React.ReactNode;
    sortingStrategy?: Strategies;
}

const Drag = ({ children, items, onDragEnd, sortingStrategy = "vertical" }: DragProps) => {
    const strategies: Record<Strategies, SortingStrategy> = {
        horizontal: horizontalListSortingStrategy,
        vertical: verticalListSortingStrategy,
    };
    const dragEndHandler = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!active.id || !over?.id) return;

        if (active.id !== over.id) {
            const activeIndex = items.indexOf(active.id.toString());
            const overIndex = items.indexOf(over.id.toString());
            const newItems = arrayMove(items, activeIndex, overIndex);
            onDragEnd(newItems);
        }
    };
    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={dragEndHandler}
            modifiers={[restrictToVerticalAxis]}
        >
            <SortableContext items={items} strategy={strategies[sortingStrategy]}>
                {children}
            </SortableContext>
        </DndContext>
    );
};

export default Drag;
