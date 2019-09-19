import React from "react";

const ButtonPrimary = props => {
  return (
    <button onClick={props.onClick} className="button-primary">
      {props.label}
    </button>
  );
};

export default ButtonPrimary;
