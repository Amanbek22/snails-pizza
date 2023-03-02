import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";
import Api from "../../api/Api";

function HomePage() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState('');

  const getPizzas = async () => {
    // const res = await fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza')
    const res = await Api.getPizzas()
    if(res.status === 200) {
      setPizzas(res.data)
    } else {
      setError("Something went wrong. Please try again.")
    }
  }

  useEffect(() => {
    getPizzas()
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
            pizzas.map((item) => <Card key={item.id} {...item} />)
          }
        </div>
      </section>
      <section>
        <Title position="center" title="Напитки" />
      </section>
    </div>
  );
}

export default HomePage;
