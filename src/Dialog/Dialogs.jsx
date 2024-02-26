import React, {Component} from 'react';

import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const dialogs = (props) => {


    let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessagesElement = props.state.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElement}
            </div>
        </div>
    );
}

export default dialogs;