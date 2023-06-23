import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { AuthContextProvider } from "./store/auth-context";
const App = function () {
  const contextData = useContext(AuthContext);
  

  return (
    <>
      <MainHeader />
      <main>
        {!contextData.isLoggedIn && <Login />}
        {contextData.isLoggedIn && <Home />}
      </main>{" "}
    </>
  );
};

export default App;
