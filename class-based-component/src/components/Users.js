import React from "react";

import { useState } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends React.Component {
  // state is always an obj in class-based component
  state = { showUsers: true };
  toggleUsersHandler = () => {
    // setState({} -> this obj here contains newState)
    // React not overwrite the old STATE =>
    // React merge the new State to old State
    // EX: old -> {name: "Huy", age: 12} => setState({name: "Tu"})
    // => new -> {name: "Tu", age: 12}
    this.setState((preState) => {
      return {
        showUsers: !preState.showUsers,
      };
    });
  };

  render() {
    const { users } = this.props;
    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

// export default Users;
