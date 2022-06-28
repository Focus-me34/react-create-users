import React, { useState, Fragment, useRef, useEffect } from "react";
import Modal from "../UI/Modal";
import styles from "./FormControl.module.scss";
import Button from "../UI/Button";

const FormControl = (props) => {
  const [isValid, setIsValid] = useState(false)
  const [isNameValid, setNameIsValid] = useState(true);
  const [isAgeValid, setAgeIsValid] = useState(true);
  const [message, setMessage] = useState(null)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const usernameInputRef = useRef();
  const userAgeInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (isNameValid && isAgeValid) {
      setIsValid(true)

      const newUser = {
        id: props.users.length + 1,
        username: name,
        age: age
      }

      props.onCreateUser(newUser)
      setName("")
      setAge("")
    } else {
      setIsValid(false)
      if (name.trim().length < 4) {
        setMessage("short")
      } else if (age <= 0) {
        setMessage("negative")
      } else if (age > 110) {
        setMessage("old")
      }
    }
  };

  useEffect(() => {
    if (name.trim().length < 4) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }

    if (age <= 0) {
      setAgeIsValid(false);
    } else if (age > 120)  {
      setAgeIsValid(false);
    } else {
      setAgeIsValid(true);
    }

  }, [name, age]
  )

  const usernameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  const changeMessageHandler = () => {
    setMessage(null);
  }

  const isDisabled = () => {
    return isValid ? "" : "disabled"
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control__container-inputs"]}>
          <div className={styles["form-control__input"]}>
            <label htmlFor="user">Username</label>
            <input onChange={usernameChangeHandler} className={!isNameValid ? styles["wrong-input"] : ""} type="text" id="user" name="user" placeholder="Enter a new Username" ref={usernameInputRef} value={name} />
          </div>

          <div className={styles["form-control__input"]}>
            <label htmlFor="age">Age (In years)</label>
            <input onChange={ageChangeHandler} className={!isAgeValid ? styles["wrong-input"] : ""} type="number" id="age" name="age" placeholder="Enter an age number" ref={userAgeInputRef} value={age} />
          </div>
        </div>

        <Button type="submit" {...isDisabled()}>Add user</Button>
      </form >

      {message !== null && <Modal message={message} onCloseModal={changeMessageHandler} />}
    </Fragment>
  )
}

export default FormControl;
