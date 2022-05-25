import React, { useState } from "react";
import './App.scss';

import Card from "./components/UI/Card";
import FormControl from "./components/Form/FormControl";
import UserList from "./components/List/UserList";

const App = () => {
  const [users, setUsers] = useState([{ id: 1, username: "Sunamin", age: 29 }]);
  const [hideCard, setHideCard] = useState(users.length === 0 ? true : false);
  const [hideModal, setHideModal] = useState(true);

  const getUserDetails = (user) => {
    setUsers(previousState => [...previousState, user])
    console.log(user);
    console.log(users);
  };

  return (
    <div>
      <Card>
        <FormControl onCreateUser={getUserDetails} users={users} />
      </Card>

      {hideCard === false &&
        <Card  >
          <UserList users={users} />
        </Card>
      }
    </div>
  )
}

export default App;
