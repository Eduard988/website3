const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';
let store = {
    _state: {

        contentPage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 23},
                {id: 2, message: 'Start', likesCount: 14},
            ],
            newPostText: 'Путь самурая'
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Акакий'},
                {id: 2, name: 'Тихон'},
                {id: 3, name: 'Святослав'},
                {id: 4, name: 'Квазар'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'WTF'},
                {id: 3, message: 'O la la'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State chanhg')
    },
    getState () {
        return this._state;
        },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type ==='ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.contentPage.newPostText,
                likesCount: 23
            }

        this._state.contentPage.posts.push(newPost);
        this._state.contentPage.newPostText = '';
        this._callSubscriber(this._state);}
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.contentPage.newPostText = action.newText
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messages.push({id: 3, message: body});
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.state=store;

