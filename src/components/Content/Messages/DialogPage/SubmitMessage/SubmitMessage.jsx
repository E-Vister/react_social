import scss from './SubmitMessage.module.scss';
import React from "react";

const SubmitMessage = (props) => {
    const sendMessage = () => {
        props.sendMessage(props.dialogId);
    }

    const onMessageFieldChange = (event) => {
        props.onMessageFieldChange(event.target.value);
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