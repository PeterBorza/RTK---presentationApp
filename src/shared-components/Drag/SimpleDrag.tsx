import React from "react";

import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";

interface SimpleDragProps {
  onDragEnd: (id: string) => void;
  onDragStart?: (id: string) => void;
  children: React.ReactNode;
}

const SimpleDrag = ({ children, onDragEnd, onDragStart }: SimpleDragProps) => {
  const dragEndHandler = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over?.id) onDragEnd(active.id.toString());
  };

  const dragStartHandler = (event: DragStartEvent) => onDragStart?.(event.active.id.toString());

  return (
    <DndContext onDragEnd={dragEndHandler} onDragStart={dragStartHandler}>
      {children}
    </DndContext>
  );
};

export default SimpleDrag;
