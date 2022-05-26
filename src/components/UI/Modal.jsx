import React, { Fragment } from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.scss";

let classes = `${styles.modal}`

// ! BACKDROP FOR THE MODAL COMPONENT 
const Backdrop = (props) => {
  const closeModalHandler = () => {
    classes += " d-none";
    props.onCloseModal();
    console.log("jvhdsvjwd")
  }

  return (
    <div className={styles["backdrop-container"]} onClick={closeModalHandler}></div>
  )
}

// ! MODAL CONTENT FOR THE MODAL COMPONENT
const ModalOverlay = (props) => {
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
    <div className={classes} >
      <h2>Invalid input</h2>
      {errorMessage}
      <button onClick={closeModalHandler}>Got it!</button>
    </ div >)
}

// ! MODAL COMPONENT BEING RENDERED, WHICH IS A COMPOSITION OF:
// ! - BACKDROP COMPONENT
// ! - MODALOVERLAY COMPONENT
// ! BOTH SUB COMPONENTS ARE BEING PORTALED OUT OF THE "root-div"
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.closeModalHandler} onCloseModal={props.onCloseModal} />, document.getElementById("backdrop-container"))}
      {ReactDom.createPortal(<ModalOverlay message={props.message} onClick={props.closeModalHandler} onCloseModal={props.onCloseModal} />, document.getElementById("overlay-container"))}
    </Fragment>
  )
}


export default Modal;
