import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../component/preloader/preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.Profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div className={s.pictur}>*/}
            {/*    <img src='https://klike.net/uploads/posts/2023-02/1675842942_3-315.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} />
            </div>

        </div>

    );
}
export default ProfiletInfo;