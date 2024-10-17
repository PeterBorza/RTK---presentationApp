import React, { CSSProperties } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableProps {
  id: string;
  getContent: (isDragging?: boolean) => React.ReactNode;
}

const SortableItem = ({ id, getContent }: SortableProps) => {
  const { attributes, listeners, isDragging, isOver, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isOver ? 0.8 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {getContent(isDragging)}
    </div>
  );
};

export default SortableItem;
