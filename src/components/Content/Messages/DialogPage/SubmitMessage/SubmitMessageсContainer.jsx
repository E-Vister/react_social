import React from "react";
import {sendMessageCreator, updateMessageFieldCreator} from "../../../../../redux/dialogs-reducer";
import SubmitMessage from "./SubmitMessage";

const SubmitMessageContainer = (props) => {
    const sendMessage = (dialogId) => {
        props.dispatch(sendMessageCreator(dialogId));
    }

    const onMessageFieldChange = (text) => {
        props.dispatch(updateMessageFieldCreator(text));
    }

    return (<SubmitMessage newMessageTextField={props.newMessageTextField} dialogId={props.id} sendMessage={sendMessage}
                           onMessageFieldChange={onMessageFieldChange}/>);
}

export default SubmitMessageContainer;