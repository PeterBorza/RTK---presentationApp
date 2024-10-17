import { BlackModal } from "shared-components";

import styles from "./ModalImage.module.scss";

const ModalImage = () => {
  const render = () => {
    return (
      <div className={styles["modal-content"]}>
        <h1>Boom</h1>
      </div>
    );
  };
  return <BlackModal renderFields={render}></BlackModal>;
};

export default ModalImage;
