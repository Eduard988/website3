import React, { Component } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
                <div className='item'>
                    <div>
                        <img src='https://webstage.bg/attachments/ckeditor/pictures-data/0003/0898/ORIGINAL-mihail-lomonosov-01.jpg'/>
                        {props.message}
                    </div>
                    <span>Like</span> {props.likesCount}
                </div>
        </div>
    );
}
export default Post;