import React, { Component } from 'react';

import s from './myFriend.module.css';
const myFriend = () => {
    return (
        <div className={s.myFriend}>
            <div className='item'>
                {props.myFriend}
            </div>
        </div>
    );
}

export default myFriend();