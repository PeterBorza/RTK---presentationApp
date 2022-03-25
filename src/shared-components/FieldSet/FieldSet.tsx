import styles from "./FieldSet.module.scss";

interface FieldSetProps {
    legend: string;
    renderBoxes: () => React.ReactNode;
}
const FieldSet = ({ legend, renderBoxes }: FieldSetProps) => {
    return (
        <fieldset className={styles.fieldSet}>
            <legend>{legend}</legend>
            <div className={styles.checkboxWrapper}>{renderBoxes()}</div>
        </fieldset>
    );
};

export default FieldSet;
