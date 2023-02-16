import React from "react";
import css from "./Title.module.css";

function Title(props) {
  return <div className={css.title} style={{textAlign: props.position}}>
    {props.title}
  </div>;
}

export default Title;
