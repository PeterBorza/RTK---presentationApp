import React from "react";
import styles from "./Group.module.scss";

interface Group {
  title: string;
  children: React.ReactNode;
}

const Group = ({ title, children }: Group) => {
  return (
    <div className={styles.group}>
      <h3 className={styles.heading}>{title}</h3>
      {children}
    </div>
  );
};

export default Group;
