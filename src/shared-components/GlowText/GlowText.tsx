import styles from "./GlowText.module.scss";

interface GlowTextProps {
    text?: string;
    animationTime?: number;
}

const GlowText = ({ text = "put your text here", animationTime = 1000 }: GlowTextProps) => {
    const getAnimationDelay = (index: number) => {
        const random = Math.floor(Math.random() * animationTime * index);
        return `${random}ms`;
    };

    const getSpanLetter = (item: string, index: number) => (
        <span
            key={`letter-${index}`}
            className={styles.animate_span}
            style={{
                animationDelay: getAnimationDelay(index),
            }}
        >
            {item}
        </span>
    );

    return (
        <div className={styles.container}>
            <div className={styles.inner_box}>
                <div className={styles.text_span}>{text.split("").map(getSpanLetter)}</div>
            </div>
        </div>
    );
};

export default GlowText;
