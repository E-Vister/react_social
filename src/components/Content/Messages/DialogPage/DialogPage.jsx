import scss from './DialogPage.module.scss';
import React from "react";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const DialogPage = (props) => {
    let messagesElements = props.messages.map(item => <Message id={item.id} key={item.id} messageText={item.messageText}/>);

    return (
        <div className={scss.dialog_page}>
            <div className={scss.back_button}><NavLink to='/messages'>{`< Back`}</NavLink></div>
            <div className={scss.messages}>
                {messagesElements}
            </div>
            <MessageFormContainer dialogId={props.dialogId}/>
        </div>
    );
}

export default DialogPage;