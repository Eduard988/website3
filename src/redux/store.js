import contentReducer from "./content-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        contentPage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 23},
                {id: 2, message: 'Start', likesCount: 14},
            ],
            newPostText: ''
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

        this._state.contentPage = contentReducer(this._state.contentPage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);




    }
}






export default store;
window.state=store;

