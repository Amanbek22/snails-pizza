import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import css from "./AdminPage.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/slices/mainSlice";

function AdminPage() {
  const dispatch = useDispatch();

  const {pizzasData, drinksData, error, isLoading} = useSelector((state) => state.main)
  console.log(pizzasData);
  useEffect(() => {
    dispatch( fetchPizzas() )
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
        {pizzasData.map((item) => <Card key={item.id} {...item} isAdmin={true} />)}
      </section>
      <Title title="Напитки" position="center" />
      <section className="d-flex">
        <Link to="/create-product" className={css.addBlock}>
            <img src="https://cdn-icons-png.flaticon.com/512/3945/3945627.png" alt="Plus" />
            <p>Добавить продукт</p>
        </Link>
        {drinksData.map((item) => <Card key={item.id} {...item} isAdmin={true} />)}
      </section>
    </div>
  );
}

export default AdminPage;
