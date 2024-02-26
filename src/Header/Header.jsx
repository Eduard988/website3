import React, { Component } from 'react';

import s from './Header.module.css';
const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/f3/d3/f8/f3d3f852d13b1e91b669c8acc01a341a.jpg' />
        </header>
    );
}

export default Header;