import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const initialEmail = {
  value: "",
  isValid: undefined,
};
const emailReducer = function (state, action) {
  switch (action.type) {
    case "CHANGE_USER_EMAIL":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const initialPassword = {
  value: "",
  isValid: undefined,
};

const passwordReducer = function (state, action) {
  switch (action.type) {
    case "CHANGE_USER_PASSWORD":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const Login = () => {
  const contextData = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmail);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialPassword
  );

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "CHANGE_USER_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "CHANGE_USER_PASSWORD",
      payload: event.target.value,
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    contextData.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="E-Mail"
          isValid={emailState.isValid}
        />
        <Input
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
          isValid={passwordState.isValid}
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
