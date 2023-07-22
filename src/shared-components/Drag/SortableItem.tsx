import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";

interface SortableProps {
    id: string;
    getContent: (isDragging: boolean) => React.ReactNode;
}

const SortableItem = ({ id, getContent }: SortableProps) => {
    const { attributes, listeners, isDragging, isOver, setNodeRef, transform, transition } =
        useSortable({
            id,
        });

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: isDragging ? "violet" : "darkgoldenrod",
        opacity: isOver ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {getContent(isDragging)}
        </div>
    );
};

export default SortableItem;
