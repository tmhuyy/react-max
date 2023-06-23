import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./UserForm.module.css";
import { useDispatch } from "react-redux";
const UserForm = () => {
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({ id: "", username: "", age: "" });

  const changeUsernameHandler = (e) => {
    setUserForm((pre) => {
      return { ...pre, username: e.target.value };
    });
  };

  const changeAgeHandler = (e) => {
    setUserForm((pre) => {
      return { ...pre, age: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // case 1
    if (
      userForm.username.trim().length === 0 ||
      userForm.age.trim().length === 0
    ) {
      dispatch({
        type: "SHOW_MODAL",
        payload: "Please enter a valid name and age (non-empty values)",
      });
    } else if (+userForm.age.trim() <= 0) {
      dispatch({
        type: "SHOW_MODAL",
        payload: "Please enter a valid age (> 0)",
      });
    } else {
      // action submit
      dispatch({
        type: "SUBMIT_NEW_USER",
        payload: { ...userForm, id: Math.random().toString() },
      });
    }
    // set to default after submitting

    setUserForm((pre) => {
      return { id: "", username: "", age: "" };
    });
  };

  return (
    <Card>
      <form className={styles["form-control"]} onSubmit={submitHandler}>
        <div className={styles["input-control"]}>
          <label htmlFor="username">Username</label>
          <Input
            type={"text"}
            id={"username"}
            value={userForm.username}
            onChange={changeUsernameHandler}
            autoFocus={true}
          />
        </div>
        <div className={styles["input-control"]}>
          <label htmlFor="age">Age (Year)</label>
          <Input
            type={"number"}
            id={"age"}
            value={userForm.age}
            onChange={changeAgeHandler}
            autoFocus={false}

          />
        </div>
        <Button type={"submit"} className={styles.button}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default UserForm;
