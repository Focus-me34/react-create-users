import React, { useState, Fragment, useRef, useEffect } from "react";
import Modal from "../UI/Modal";
import styles from "./FormControl.module.scss";
import Button from "../UI/Button";

const FormControl = (props) => {
  const [isValid, setIsValid] = useState(true)
  const [isNameValid, setNameIsValid] = useState(true);
  const [isAgeValid, setAgeIsValid] = useState(true);
  const [message, setMessage] = useState(null)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const usernameInputRef = useRef();
  const userAgeInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // const enteredUsername = usernameInputRef.current.value;
    // const enteredUserAge = userAgeInputRef.current.value;

    // if (parseInt(enteredUserAge) <= 0) {
    //   setIsValid(false);
    //   setMessage("negative");
    //   return
    // } else if ((enteredUsername.trim().length === 0) || (enteredUserAge.trim().length === 0)) {
    //   setIsValid(false);
    //   setMessage("missing");
    //   return
    // }

    // setIsValid(true);
    // const newUser = {
    //   id: props.users.length + 1,
    //   username: enteredUsername,
    //   age: enteredUserAge
    // }

    // usernameInputRef.current.value = "";
    // userAgeInputRef.current.value = "";


    if ((isNameValid === false) && (isAgeValid === false)) {
      setIsValid(false)
    } else {
      setIsValid(true)

      const newUser = {
        id: props.users.length + 1,
        username: name,
        age: age
      }
      props.onCreateUser(newUser)
    }

  };

  const usernameChangeHandler = (e) => {
    setName(e.target.value)

    if (name.trim().length <= -1) {
      setNameIsValid(true);
      setMessage()
    } else if (name.trim().length <= 4) {
      setNameIsValid(false);
      // setMessage("missing");
    } else {
      setNameIsValid(true);
    }
  }


  const ageChangeHandler = (e) => {
    setAge(e.target.value)

    if (parseInt(age) <= 0) {
      setAgeIsValid(false);
      // setMessage("negative");
    } else {
      setAgeIsValid(true);
    }
  }

  const changeMessageHandler = () => {
    setMessage(null);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control__container-inputs"]}>
          <div className={styles["form-control__input"]}>
            <label htmlFor="user">Username</label>
            <input onChange={usernameChangeHandler} className={!isNameValid ? styles["wrong-input"] : ""} type="text" id="user" name="user" placeholder="Enter a new Username" ref={usernameInputRef} value={name}/>
          </div>

          <div className={styles["form-control__input"]}>
            <label htmlFor="age">Age (In years)</label>
            <input onChange={ageChangeHandler} className={!isAgeValid ? styles["wrong-input"] : ""} type="number" id="age" name="age" placeholder="Enter an age number" ref={userAgeInputRef} value={age}/>
          </div>
        </div>

        <Button type="submit">Add user</Button>
      </form >

      {message !== null && <Modal message={message} onCloseModal={changeMessageHandler} />}
    </Fragment>
  )
}

export default FormControl;
