import classes from "./User.module.css";
import React from "react";
class User extends React.Component {
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    const { name } = this.props;
    return <li className={classes.user}>{name}</li>;
  }
}

export default User;
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;
