import { Fragment, useState, useEffect } from "react";
import React from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends React.Component {
  static contextType = UsersContext;
  state = {
    filteredUsers: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, preState) {
    if (preState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
