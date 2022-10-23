import users from "./users";

const SEND_MESSAGE = 'SEND-MESSAGE';

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
            id: 4, author: users[5],messages: []
        },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.message === '') return;

            let newMessage = {
                id: 5,
                messageText: action.message
            }

            state.dialogsArray[action.dialogId].messages = [...state.dialogsArray[action.dialogId].messages, newMessage];

            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (id, message) => ({
    type: SEND_MESSAGE,
    dialogId: id,
    message: message,
});

export default dialogsReducer;