import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../api/Api";
import { incremented } from "../../redux/slices/mainSlice";
import Button from "../Button/Button";
import css from "./Card.module.css";

function Card({ price, id, name, description, image, isAdmin = false }) {
  const value = useSelector((state) => state.main.value);

  const dispatch = useDispatch();

  const testRedux = () => {
    dispatch(incremented())
  }

  const deletePizza = () => {
    const res = window.confirm('Вы действмтельно хотите удалить ' + name + '?')
    console.log(res);
    if(res) {
      Api.deletePizza(id)
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
        <div>Price: {price} {value} </div>
        {isAdmin ? (
          <Button onClick={deletePizza} title={"Удалить"} variant="empty" />
        ) : (
          <Button onClick={testRedux} title={"В корзину"} variant="empty" />
        )}
      </div>
    </div>
  );
}

export default Card;
