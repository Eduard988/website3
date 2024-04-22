const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 23},
        {id: 2, message: 'Start', likesCount: 14},
    ],
    newPostText: ''
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
         case UPDATE_NEW_POST_TEXT:{
             return {
                 ...state,
                 newPostText: action.newText
             }
         }
         default:
             return state;
     }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default contentReducer