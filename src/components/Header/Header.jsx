import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import css from "./Header.module.css"; 

function Header() {
  return (
    <div className={css.wrapper + " container" }>
        <Link to="/">
            <h1>SOLID PIZZA</h1>
        </Link>
        <Button title="Корзина" />
    </div>
  )
}

export default Header;