import React, {Component} from 'react';
import s from './Profile.module.css';

import PostsContainer from "./My posts/PostsConteiner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.Profile}>
            <ProfileInfo content={props.profile} status={props.status}
            updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;