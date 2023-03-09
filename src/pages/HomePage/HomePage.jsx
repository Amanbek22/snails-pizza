import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/slices/mainSlice";

function HomePage() {
  const dispatch = useDispatch();

  const {pizzasData, drinksData, error, isLoading} = useSelector((state) => state.main)
console.log(pizzasData);
  useEffect(() => {
    dispatch( fetchPizzas() )
  }, [])

  if(error) return <h1>{error}</h1>
  return (
    <div className="container">
      <main>Slider</main>
      <section className={css.pizzas}>
        <Title title="Пиццы" />
        {/* Карточки */}
        <div className={css.cardsWrapper}>
          {
            pizzasData.map((item) => <Card key={item.id} {...item} />)
          }
        </div>
      </section>
      <section>
        <Title position="center" title="Напитки" />
        <div className={css.cardsWrapper}>
          {
            drinksData.map((item) => <Card key={item.id} {...item} />)
          }
        </div>
      </section>
    </div>
  );
}

export default HomePage;
