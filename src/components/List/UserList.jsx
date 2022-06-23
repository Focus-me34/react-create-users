import React from "react";
import styles from "./UserList.module.scss";
import UserItem from "./UserItem";

const UserList = (props) => {


  return (
    <div>
      {props.users.map(user => <UserItem username={user.username} age={user.age} key={user.id} />)}
    </div>
  )
}

export default UserList;
