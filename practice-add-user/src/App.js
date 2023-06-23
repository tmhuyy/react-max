import React from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const isValid = useSelector((state) => state.modalReducer.isValid);
  return (
    <>
      { !isValid && <Modal></Modal> }
      <UserForm />
      <UserList />
      
    </>
  );
}

export default App;
