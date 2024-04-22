import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_CONTENT = 'SET_USER_CONTENT';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 23},
        {id: 2, message: 'Start', likesCount: 14},
    ],
    newPostText: '',
    content: null,
    status: "",
}


const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 23
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_CONTENT: {
            return {...state, content: action.content}
        }
        case SET_STATUS: {
            return {...state,
                status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserContent = (content) => ({type: SET_USER_CONTENT, content})
export const setStatus = (status) => ({type: SET_STATUS, status})



export const getUserContent = (userId) => (dispatch) =>{
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserContent(response.data));
        });
}
export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode===0){
            dispatch(setStatus(response.data));
            }
        });
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default contentReducer