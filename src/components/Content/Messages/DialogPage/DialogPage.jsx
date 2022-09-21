import scss from './DialogPage.module.scss';
import React from "react";
import SubmitMessage from "./SubmitMessage/SubmitMessage";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

const DialogPage = (props) => {
    let messagesElements = props.messages.map(item => <Message id={item.id} messageText={item.messageText}/>);

    return (
        <div className={scss.dialog_page}>
            <div className={scss.back_button}><NavLink to='/messages'>{`< Back`}</NavLink></div>
            <div className={scss.messages}>
                {messagesElements}
            </div>
            <SubmitMessage newMessageTextField={props.newMessageTextField} dispatch={props.dispatch}
                           dialogId={props.id}/>
        </div>
    );
}

export default DialogPage;