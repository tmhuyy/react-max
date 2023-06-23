import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onAddGoal(enteredValue.trim());
    }
    setEnteredValue("");
    setIsValid(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${!isValid && classes.invalid }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button
        type="submit"
        // disabled={!isValid}
        // style={!isValid ? { backgroundColor: "gray", cursor: "default" } : {}}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
