import scss from './SubmitMessage.module.scss';
import React from "react";
import {sendMessageCreator, updateMessageFieldCreator} from "../../../../../redux/dialogs-reducer";

const SubmitMessage = (props) => {
    const sendMessage = () => {
        props.dispatch(sendMessageCreator(props.dialogId));
    }

    const onMessageFieldChange = (event) => {
        props.dispatch(updateMessageFieldCreator(event.target.value));
    }

    return (
        <div className={scss.field}>
            <div>
                <textarea onChange={onMessageFieldChange}
                          name="new_message_text_field"
                          id="new_message_text_field"
                          cols="50"
                          rows="5"
                          value={props.newMessageTextField}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default SubmitMessage;