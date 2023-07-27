import React, { ElementType, ReactNode } from "react";

import { DndContext, DragEndEvent, DragStartEvent, closestCenter } from "@dnd-kit/core";
import {
    SortableContext,
    SortingStrategy,
    arrayMove,
    horizontalListSortingStrategy,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import SortableItem from "./SortableItem";

type Strategies = "horizontal" | "vertical";
export type DragItemsType = string[];

interface DragProps {
    items: DragItemsType;
    onDragEnd: (items: DragItemsType) => void;
    onDragStart?: (id: string) => void;
    sortingStrategy?: Strategies;
    className?: string;
    sortableItem: (id: string, isDragging?: boolean) => React.ReactNode;
}

const SortableDrag = ({
    items,
    onDragEnd,
    onDragStart,
    sortingStrategy = "vertical",
    sortableItem,
    className,
}: DragProps) => {
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

    const dragStartHandler = (event: DragStartEvent) => {
        const { active } = event;
        onDragStart && onDragStart(active.id.toString());
    };
    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={dragEndHandler}
            onDragStart={dragStartHandler}
            modifiers={[restrictToVerticalAxis]}
        >
            <SortableContext items={items} strategy={strategies[sortingStrategy]}>
                <div className={className}>
                    {items.map(str => (
                        <SortableItem
                            key={str}
                            id={str}
                            getContent={isDragging => sortableItem(str, isDragging)}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default SortableDrag;
