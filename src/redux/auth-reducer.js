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

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, login, name, surname} = data.loginData;
            dispatch(setUserData(id, login, name, surname, true));
        }
    });
}
export const login = (login, setError) => (dispatch) => {
    authAPI.login(login).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            setError('login', {
                message: data.message
            })
        }
    });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, null, false));
        }
    });
}

export default authReducer;