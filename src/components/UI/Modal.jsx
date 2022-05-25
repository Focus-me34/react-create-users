import React, { useState } from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  let classes = `${styles.modal}`

  const closeModalHandler = () => {
    classes += " d-none";
    props.onCloseModal();
  }

  let errorMessage = "";
  if (props.message === "missing") {
    errorMessage = <p>Please make sure you fill up all the inputs!</p>
  } else if (props.message === "negative") {
    errorMessage = <p>Please, make sure you enter a valid age! (`{'>'}` 0)</p>
  };

  return (
    <div className={styles["backdrop-container"]}>
      <div className={classes} >
        <h2>Invalid input</h2>
        {errorMessage}
        <button onClick={closeModalHandler}>Got it!</button>
      </ div >
    </div>
  )

}


export default Modal;
