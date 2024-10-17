import classNames from "classnames";
import styles from "../SideBar.module.scss";

const Footer = ({ className }: { className?: string }) => (
  <footer className={classNames(styles.footer, className)}>
    <p>&copy; by Borza Peter</p>
  </footer>
);

export default Footer;
