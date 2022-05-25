import React, { useState } from "react";
import styles from "./FormControl.module.scss";
import Modal from "../UI/Modal";


const FormControl = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("ok")
  const value = "";

  const submitHandler = (e) => {
    e.preventDefault();

    if (parseInt(e.target.elements[1].value) <= 0) {
      setIsValid(false);
      setMessage("negative");
      console.log("negative");
      return
    } else if ((e.target.elements[0].value.trim().length === 0) || (e.target.elements[1].value.trim().length === 0)) {
      setIsValid(false);
      setMessage("missing");
      console.log("missing");
      return
    }

    setIsValid(true);
    const newUser = {
      id: props.users.length + 1,
      username: e.target.elements[0].value,
      age: e.target.elements[1].value
    }

    e.target.elements[0].value = "";
    e.target.elements[1].value = "";

    props.onCreateUser(newUser)
  };

  const changeMessageHandler = () => {
    setMessage("ok");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control__container-inputs"]}>
          <div className={styles["form-control__input"]}>
            <label htmlFor="user">Username</label>
            <input className={!isValid ? styles["wrong-input"] : ""} type="text" id="user" name="user" placeholder="Enter a new Username" />
          </div>

          <div className={styles["form-control__input"]}>
            <label htmlFor="age">Age (In years)</label>
            <input className={!isValid ? styles["wrong-input"] : ""} type="number" id="age" name="age" placeholder="Enter an age number" />
          </div>
        </div>

        <button type="submit" className={styles["form-control__submit-button"]}>Add User</button>
      </form >

      {message !== "ok" && <Modal message={message} onCloseModal={changeMessageHandler} />}
    </div>
  )
}

export default FormControl;
