import React, {Component} from 'react';
import Content from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserContent, updateStatus} from "../redux/content-reducer";

import {Redirect, useParams} from "react-router-dom";
import {usersAPI} from "../api/api";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import Profile from "./Profile";
export function withRouter(Children) {
    return(props)=>{
        const match = {params: useParams()};
        return <Children {...props} match= {match}/>
    }
}



class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId =2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile  {...this.props} Profile={this.props.profile} status={this.props.status}
                      updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    content: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserContent, getStatus,updateStatus} ),
    withRouter,
    withAuthRedirect,

)(ProfileContainer)


