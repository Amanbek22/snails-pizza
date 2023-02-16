import React from "react";
import css from "./Button.module.css";

// props = { title: string; variant: string }
// variant = "full" || "empty"
function Button(props) {
  return (
    <button className={props.variant === "empty" ? css.empty : css.full}>
      {props.title}
    </button>
  );
}

export default Button;
