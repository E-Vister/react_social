const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageTextField;

            if (text === '') return;

            let newMessage = {
                id: 5,
                messageText: text
            }

            state.dialogsArray[action.dialogId].messages.push(newMessage);
            state.newMessageTextField = '';
            return state;
        case UPDATE_MESSAGE_FIELD:
            state.newMessageTextField = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = (id) => ({
    type: SEND_MESSAGE,
    dialogId: id,
});

export const updateMessageFieldCreator = (text) => ({
    type: UPDATE_MESSAGE_FIELD,
    text: text,
});

export default dialogsReducer;