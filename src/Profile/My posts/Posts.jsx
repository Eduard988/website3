import React, { Component } from 'react';
import Post from "./Post/post";

import s from './Posts.module.css';
//import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/content-reducer";

const Posts = (props) => {
    let postsElements =
    props.posts.map( p => <Post message={p.message} likesCount= {p.likesCount}/>)

    let newPostElement = React.createRef() ;

    let onAddPost = ()=> {
        props.addPost ();
    }
    let onePostChange = ()=> {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
                <div>
                    <textarea onChange={onePostChange} ref={newPostElement}
                                value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default Posts;

