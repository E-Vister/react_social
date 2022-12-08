import {authAPI} from "../api/api";
import {setDialogs} from "./dialogs-reducer";

const SET_USER_DATA = 'react_social/auth/SET_USER_DATA';

let initialState = {
    userId: '',
    login: '',
    name: '',
    surname: '',
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, userLogin, name, surname, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId: userId,
            login: userLogin,
            name: name,
            surname: surname,
            isAuth: isAuth,
        },
    }
}

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, login, name, surname} = response.loginData;
        dispatch(setUserData(id, login, name, surname, true));
        dispatch(setDialogs(response.dialogs))
    }
}
export const login = (login, setError) => async (dispatch) => {
    const response = await authAPI.login(login);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        setError('login', {
            message: response.message
        })
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, null, false));
    }
}

export default authReducer;