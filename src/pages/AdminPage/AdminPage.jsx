import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import axios from "axios"
import Card from "../../components/Card/Card";
import css from "./AdminPage.module.css"
import { Link } from "react-router-dom";

function AdminPage() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState('');

  const getPizzas = async () => {
    const res = await axios.get('https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza')
    if(res.status === 200) {
      setPizzas(res.data)
    } else {
      setError("Something went wrong. Please try again.")
    }
  }

  useEffect(() => {
     getPizzas();
  }, [])

  if(error) return <h1>{error}</h1>
  return (
    <div className="container">
      <Title title="Пиццы" position="center" />
      <section className="d-flex">
        <Link to="/create-product" className={css.addBlock}>
            <img src="https://cdn-icons-png.flaticon.com/512/3945/3945627.png" alt="Plus" />
            <p>Добавить продукт</p>
        </Link>
        {pizzas.map((item) => <Card key={item.id} {...item} isAdmin={true} />)}
      </section>
    </div>
  );
}

export default AdminPage;
