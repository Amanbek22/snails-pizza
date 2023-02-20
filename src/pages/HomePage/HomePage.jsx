import React from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className="container">
      <main>Slider</main>
      <section>
        <Title title="Пиццы" />
        {/* Карточки */}
        <div className={css.cardsWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <Title position="center" title="Напитки" />
      </section>
    </div>
  );
}

export default HomePage;
