import React, { FC } from "react";
import styles from "./FloatingImage.module.scss";

export type FloatingImageProps = {
  src: string;
  alt?: string;
};

const FloatingImage: FC<FloatingImageProps> = ({
  src,
  alt = "floating image",
  children,
}) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.floatingImage} src={src} alt={alt} />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default FloatingImage;
