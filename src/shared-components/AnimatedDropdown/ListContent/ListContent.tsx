import { ReactNode, useRef } from "react";
import styles from "../AnimatedDropdown.module.scss";
import { useOnClickOutside } from "hooks";

interface Props {
    items: ReactNode[];
    onItemClick?: (item: ReactNode) => void;
}

const ListContent = ({ items, onItemClick }: Props) => {
    const ulRef = useRef<HTMLUListElement>(null);

    const scrollToTop = () => {
        ulRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    useOnClickOutside([ulRef], scrollToTop);

    return (
        <ul ref={ulRef} className={styles.content}>
            {items.map((item, index) => (
                <li key={index} onClick={() => onItemClick && onItemClick(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ListContent;
