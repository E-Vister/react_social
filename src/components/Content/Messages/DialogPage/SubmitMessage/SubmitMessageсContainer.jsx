import React from "react";
import {sendMessageCreator, updateMessageFieldCreator} from "../../../../../redux/dialogs-reducer";
import SubmitMessage from "./SubmitMessage";
import {connect} from "react-redux";

let mapStateToProps = (state, props) => {
    return {
        newMessageTextField: state.dialogs.newMessageTextField,
        dialogId: props.dialogId
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageFieldChange: (text) => {
            dispatch(updateMessageFieldCreator(text));
        },
        sendMessage: (dialogId) => {
            dispatch(sendMessageCreator(dialogId));
        }
    }
}

const SubmitMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitMessage);

export default SubmitMessageContainer;