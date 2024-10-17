import { ReactNode } from "react";

import styles from "../UtilityTable.module.scss";

type FooterProps = {
  className?: string;
  children?: ReactNode;
};

const Footer = ({ className, children }: FooterProps) => (
  <div className={!className ? `${styles.tableFooter}` : className}>{children}</div>
);

export default Footer;
