import React from "react";
import Button from "../Button/Button";
import css from "./Card.module.css";

const testText = 'Моцарелла, смесь сыров чеддер и пармезан, цыпленок, пепперони, соус альфредо'

function Card() {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_138x138.jpeg"
          alt=""
        />
      </div>
      <div className={css.title}>Пеперони</div>
      <p title={testText} className={css.description}>
        {testText}
      </p>
      <div className={css.footer}>
        <div>Price</div>
        <Button title="В корзину" variant="empty" />
      </div>
    </div>
  );
}

export default Card;
