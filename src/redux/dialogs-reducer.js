import {dialogsAPI} from "../api/api";

const SET_DIALOGS = 'SET-DIALOGS';

let initialState = {
    dialogsArray: []
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS: {
            if (action.dialogs === undefined) return

            return {
                ...state,
                dialogsArray: action.dialogs
            }
        }
        default:
            return state;
    }
}

export const  setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs,
    }
}

export const addMessage = (content, dialogId) => async (dispatch) => {
    await dialogsAPI.addMessage(content, dialogId).then(data => {
        if (data.resultCode === 0) {
            dispatch(setDialogs(data.dialogs));
        }
    })
}

export default dialogsReducer;