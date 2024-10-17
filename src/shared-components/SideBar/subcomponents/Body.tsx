import { ReactNode } from "react";

import classNames from "classnames";
import styles from "../SideBar.module.scss";
interface BodyProps {
  className?: string;
  renderBody: () => ReactNode;
}

const Body = ({ className, renderBody }: BodyProps) => (
  <main className={classNames(styles.body, className)}>{renderBody()}</main>
);

export default Body;
