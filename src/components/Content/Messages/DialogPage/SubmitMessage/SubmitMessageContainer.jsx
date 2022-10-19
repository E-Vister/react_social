import SubmitMessage from "./SubmitMessage";
import {connect} from "react-redux";
import {sendMessage, updateMessageField} from "../../../../../redux/dialogs-reducer";

let mapStateToProps = (state, props) => {
    return {
        newMessageTextField: state.dialogs.newMessageTextField,
        dialogId: props.dialogId
    }
};

export default connect(mapStateToProps, {
    updateMessageField,
    sendMessage,
})(SubmitMessage);