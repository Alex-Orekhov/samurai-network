import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Greg'},
        {id: 3, name: 'Rick'},
        {id: 4, name: 'Sam'},
        {id: 5, name: 'Andrew'},
        {id: 6, name: 'Stan'},
    ];

    let messages = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'What\'s up?'},
        {id: 3, text: 'I\'m learning React :)'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.text}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;