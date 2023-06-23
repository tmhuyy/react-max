import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const contextData = useContext(AuthContext);
  console.log(contextData);
  return (
    <nav className={classes.nav}>
      {contextData.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
