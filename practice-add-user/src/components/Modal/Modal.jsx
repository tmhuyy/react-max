import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.modalReducer.message);
  const clickHandler = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={clickHandler}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <h2 className={styles.title}>Invalid input</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles["btn-container"]}>
          <Button
            className={styles.button}
            type={"button"}
            onClick={clickHandler}
          >
            Okay
          </Button>
        </div>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export default Modal;
