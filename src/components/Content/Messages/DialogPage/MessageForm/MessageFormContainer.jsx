import MessageForm from "./MessageForm";
import {connect} from "react-redux";
import {sendMessage} from "../../../../../redux/dialogs-reducer";

let mapStateToProps = (state, props) => {
    return {
        dialogId: props.dialogId
    }
};

export default connect(mapStateToProps, {
    sendMessage,
})(MessageForm);