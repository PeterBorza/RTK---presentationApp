import styles from "./ColorBall.module.scss";

interface ColorBallProps {
  color: string;
  id?: string;
}

const ColorBall = ({ color, id = "color" }: ColorBallProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.container}>
      {id}
    </div>
  );
};

export default ColorBall;
