let rerenderEntireTree = () => {
    console.log('State chanhg')
}


let state = {

    contentPage: {posts: [
            {id: 1, message: 'Hello', likesCount: 23},
            {id: 2, message: 'Start', likesCount: 14},
        ],
        newPostText: 'Путь самурая'
    },
    messagePage: {dialogs: [
            {id: 1, name: 'Акакий'},
            {id: 2, name: 'Тихон'},
            {id: 3, name: 'Святослав'},
            {id: 4, name: 'Квазар'}
        ],
                  messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'WTF'},
            {id: 3, message: 'O la la'},
        ]},
    };

export let addPost =(postMessage) => {
    let newPost ={
        id: 5,
        message: postMessage,
        likesCount: 23
    }

    state.contentPage.posts.push(newPost);
    state.contentPage.newPostText='';
}

export let  updateNewPostText = (newText) => {

    state.contentPage.newPostText = newText
    rerenderEntireTree (state);
}



export default state

