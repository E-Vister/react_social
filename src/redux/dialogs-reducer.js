import {dialogsAPI} from "../api/api";

const SET_DIALOGS = 'react_social/dialogs/SET_DIALOGS';

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

export const setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs,
    }
}

export const addMessage = (content, dialogId) => async (dispatch) => {
    const response = await dialogsAPI.addMessage(content, dialogId);

    if (response.resultCode === 0) {
        dispatch(setDialogs(response.dialogs));
    }
}

export default dialogsReducer;