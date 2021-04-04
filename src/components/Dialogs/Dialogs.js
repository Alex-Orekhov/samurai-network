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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = 'John' id='1'/>
                <DialogItem name = 'Greg' id='2'/>
                <DialogItem name = 'Rick' id='3'/>
                <DialogItem name = 'Sam' id='4'/>
                <DialogItem name = 'Andrew' id='5'/>
                <DialogItem name = 'Stan' id='6'/>
                <DialogItem name = 'Victor' id='7'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'What\'s up?'}/>
                <Message message={'I\'m learning React :)'}/>
            </div>
        </div>
    )
}

export default Dialogs;