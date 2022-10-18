import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

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
                ...action.userData,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, userLogin, name, surname) => {
    return {
        type: SET_USER_DATA,
        userData: {
            userId: userId,
            login: userLogin,
            name: name,
            surname: surname,
        },
    }
}

export const getUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(
                data.loginData.id,
                data.loginData.login,
                data.loginData.name,
                data.loginData.surname,
            ));
        }
    });
}

export default authReducer;