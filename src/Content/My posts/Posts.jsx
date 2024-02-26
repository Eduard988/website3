import React, { Component } from 'react';
import Post from "./Post/post";

import s from './Posts.module.css';

const Posts = (props) => {


let postElement =
    props.posts.map( p => <Post message={p.message} likesCount= {p.likesCount}/>)

    let newPostElement = React.createRef ();

    let addPost = ()=> {
    let text = newPostElement.current.value;
    props.addPost (text)
    }


    return (
        <div className={s.PostsBlock}>
            <h3> My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            <div className={s.posts}>
                { postElement }
            </div>
        </div>
    );
}

export default Posts;

