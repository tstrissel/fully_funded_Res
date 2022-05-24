import styles from "./Modal.module.css";
import ReactModal from "react-modal";

export default function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      closeTimeoutMS={200}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={props.onRequestClose}
    >
      <button className={styles.closebtn} onClick={props.onRequestClose}>
        ×
      </button>
      {props.children}
    </ReactModal>
  );
}
