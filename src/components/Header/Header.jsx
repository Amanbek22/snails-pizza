import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import css from "./Header.module.css"; 

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div className={css.wrapper + " container" }>
        <Link to="/">
            <h1>SOLID PIZZA</h1>
        </Link>
        <Button title="Корзина" />
        { location?.pathname === '/admin' && <Button  title="Выйти" variant={'empty'} /> }
    </div>
  )
}

export default Header;