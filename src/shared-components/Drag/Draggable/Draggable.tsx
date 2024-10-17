import { ElementType } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

import styles from "./Draggable.module.scss";
import classNames from "classnames";

interface DraggableProps {
  element?: ElementType;
  id: string;
  className?: string;
}

const Draggable = ({ element, id, className }: DraggableProps) => {
  const Element = element || "div";
  const { attributes, isDragging, transform, setNodeRef, listeners } = useDraggable({
    id,
  });

  const wrapper = classNames(className, {
    [styles.isDragging]: isDragging,
  });

  const cssTransform = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Element
      ref={setNodeRef}
      className={wrapper}
      style={cssTransform}
      {...attributes}
      {...listeners}
    >
      {id}
    </Element>
  );
};

export default Draggable;
