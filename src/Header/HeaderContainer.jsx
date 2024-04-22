import React, { Component } from 'react';

import s from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/f3/d3/f8/f3d3f852d13b1e91b669c8acc01a341a.jpg' />
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Logoin</NavLink>
            </div>
        </header>
    );
}

export default Header;