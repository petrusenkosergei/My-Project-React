import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return  <header className={s.header}>
        {/*<img src='https://status-telecom.ru/upload/iblock/cad/cad61455208db196e177e37076915cb9.jpg'/>*/}

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
};

export  default Header;