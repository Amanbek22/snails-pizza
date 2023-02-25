import axios from "axios";
import React from "react";
import Button from "../Button/Button";
import css from "./Card.module.css";

function Card({ price, id, name, description, image, isAdmin = false }) {
  const deletePizza = () => {
    const res = window.confirm('Вы действмтельно хотите удалить ' + name + '?')
    console.log(res);
    if(res) {
      axios.delete('https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza/' + id)
        .then(() => {
          window.location.reload()
        })
    }
  }
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={image} alt={name} />
      </div>
      <div className={css.title}>{name}</div>
      <p title={description} className={css.description}>
        {description}
      </p>
      <div className={css.footer}>
        <div>Price: {price}</div>
        {isAdmin ? (
          <Button onClick={deletePizza} title={"Удалить"} variant="empty" />
        ) : (
          <Button title={"В корзину"} variant="empty" />
        )}
      </div>
    </div>
  );
}

export default Card;
