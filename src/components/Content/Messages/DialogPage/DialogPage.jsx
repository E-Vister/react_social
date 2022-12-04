import scss from './DialogPage.module.scss';
import React from "react";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const DialogPage = (props) => {
    let messagesElements = props.messages.map((item, index, array) => {
        if (index !== 0) {
            (array[index - 1].authorId === array[index].authorId)
                ? array[index - 1].noTail = true
                : array[index - 1].noTail = false
        } else {
            array[array.length - 1].noTail = false
        }

        return <Message authorId={item.authorId}
                        userId={props.userId}
                        key={item.id}
                        messageText={item.content}
                        noTail={item.noTail}
        />
    });

    return (
        <div className={scss.container}>
            <div className={scss.chat_header}>
                <div className={scss.back_button}>
                    <NavLink to='/messages'>
                        <span>❮ Back</span>
                    </NavLink>
                </div>
                <span className={scss.header_name}>
                    <NavLink to={`/profile/${props.interlocutorId}`}>
                        {props.username}
                    </NavLink>
                </span>
                <div className={scss.avatar}>
                    <NavLink to={`/profile/${props.interlocutorId}`}>
                        <img className={scss.avatar_image}
                             src={props.avatar}
                             alt="title_avatar"/>
                    </NavLink>
                </div>
            </div>
            <div className={scss.wrapper}>
                <div className={scss.messages}>
                    {messagesElements}
                </div>
                <MessageFormContainer dialogId={props.dialogId}/>
            </div>
        </div>
    );
}

export default DialogPage;