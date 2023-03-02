import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import axios from "axios"
import Card from "../../components/Card/Card";
import css from "./AdminPage.module.css"
import { Link } from "react-router-dom";
import Api from "../../api/Api";

function AdminPage() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState('');

  const getPizzas = async () => {
    const res = await Api.getPizzas()
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
