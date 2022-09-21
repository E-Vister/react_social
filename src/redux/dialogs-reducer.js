import users from "./users";


const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';

let initialState = {
        dialogsArray: [
            {
                id: 0, author: users[1], messages: [
                    {
                        id: 1,
                        messageText: 'Morning'
                    },
                    {
                        id: 2,
                        messageText: 'What about our business?'
                    }
                ]
            },
            {
                id: 1, author: users[2], messages: []
            },
            {
                id: 2, author: users[3], messages: []
            },
            {
                id: 3, author: users[4], messages: []
            },
            {
                id: 4, author: users[5], messages: []
            },
        ],
        newMessageTextField: '',
};

const dialogsReducer = (state = initialState, action) => {
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