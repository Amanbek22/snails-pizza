import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import css from "./Header.module.css"; 
import { logout } from '../../redux/slices/AuthSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( logout() )  
  } 

  return (
    <div className={css.wrapper + " container" }>
        <Link to="/">
            <h1>SOLID PIZZA</h1>
        </Link>
        <Button title="Корзина" />
        { location?.pathname === '/admin' && <Button onClick={onLogout} title="Выйти" variant={'empty'} /> }
    </div>
  )
}

export default Header;