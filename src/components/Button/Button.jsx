import React from "react";
import css from "./Button.module.css";

// props = { title: string; variant: string }
// variant = "full" || "empty"
function Button({ title, variant, ...props }) {
  return (
    <button {...props} className={variant === "empty" ? css.empty : css.full}>
      {title}
    </button>
  );
}

export default Button;
