import React, {Component} from 'react';
import s from './Content.module.css';
import Posts from "./My posts/Posts";
import ContentInfo from "./ContentInfo/ContentInfo";
import {addPost} from "../redux/state";

const Content = (props) => {



    return (
        <div className={s.Content}>
            <ContentInfo />
            <Posts posts={props.state.posts}
            addPost={props.addPost}/>
        </div>
    );
}

export default Content;