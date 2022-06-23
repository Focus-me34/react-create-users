import React, { useState, Fragment, useRef, useEffect } from "react";
import Modal from "../UI/Modal";
import styles from "./FormControl.module.scss";

const FormControl = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState(null)
  const usernameInputRef = useRef();
  const userAgeInputRef = useRef();
  console.log(usernameInputRef);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredUserAge = userAgeInputRef.current.value;

    if (parseInt(enteredUserAge) <= 0) {
      setIsValid(false);
      setMessage("negative");
      return

    } else if ((enteredUsername.trim().length === 0) || (enteredUserAge.trim().length === 0)) {
      setIsValid(false);
      setMessage("missing");
      return
    }

    setIsValid(true);
    const newUser = {
      id: props.users.length + 1,
      username: enteredUsername,
      age: enteredUserAge
    }

    usernameInputRef.current.value = "";
    userAgeInputRef.current.value = "";

    props.onCreateUser(newUser)
  };

  const changeMessageHandler = () => {
    setMessage(null);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control__container-inputs"]}>
          <div className={styles["form-control__input"]}>
            <label htmlFor="user">Username</label>
            <input className={!isValid ? styles["wrong-input"] : ""} type="text" id="user" name="user" placeholder="Enter a new Username" ref={usernameInputRef} />
          </div>

          <div className={styles["form-control__input"]}>
            <label htmlFor="age">Age (In years)</label>
            <input className={!isValid ? styles["wrong-input"] : ""} type="number" id="age" name="age" placeholder="Enter an age number" ref={userAgeInputRef} />
          </div>
        </div>

        <button type="submit" className={styles["form-control__submit-button"]}>Add User</button>
      </form >

      {message !== null && <Modal message={message} onCloseModal={changeMessageHandler} />}
    </Fragment>
  )
}

export default FormControl;
