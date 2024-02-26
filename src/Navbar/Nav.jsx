import React, { Component } from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";



const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/content" activeClassName={s.activeLink}>Prifile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' className={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
            
        </nav>
    );
}

export default Nav;