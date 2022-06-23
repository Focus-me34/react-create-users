import React, { useState } from "react";
import './App.scss';

import Card from "./components/UI/Card";
import FormControl from "./components/Form/FormControl";
import UserList from "./components/List/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [hideCard, setHideCard] = useState(users.length === 0 ? true : false);

  const getUserDetails = (user) => {
    setUsers(previousState => [...previousState, user])
    setHideCard(false)
  };

  return (
    <React.Fragment>
      <Card>
        <FormControl onCreateUser={getUserDetails} users={users} />
      </Card>

      {hideCard === false &&
        <Card  >
          <UserList users={users} />
        </Card>
      }
    </React.Fragment>
  )
}

export default App;
