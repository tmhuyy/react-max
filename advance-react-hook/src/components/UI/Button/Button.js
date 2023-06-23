import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  const {type, className, onClick, disabled } = props;
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
