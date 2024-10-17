import React from "react";
import styles from "./FloatingImage.module.scss";

export type FloatingImageProps = {
  src: string;
  alt?: string;
  children?: React.ReactNode;
};

const FloatingImage = ({ src, alt = "floating image", children }: FloatingImageProps) => (
  <div className={styles.imageContainer}>
    <img className={styles.floatingImage} src={src} alt={alt} />
    <div className={styles.childrenContainer}>{children}</div>
  </div>
);

export default FloatingImage;
