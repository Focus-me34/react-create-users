import React from "react";
import styles from "./UserItem.module.scss";

const UserItem = (props) => {

  return (
    <div>
      <p className={styles["user-item__user"]}>{props.username} ({props.age} years old)</p>
    </div>
  )
}

export default UserItem;
