import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => (dispatch) => {
    let authPromise = dispatch(getAuthUserData());

    Promise.all([authPromise]).then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;