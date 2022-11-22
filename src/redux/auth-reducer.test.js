import {authAPI} from "../api/api";
import authReducer, {getAuthUserData, login, logout, setUserData} from "./auth-reducer";

jest.mock('../api/api');

const authAPIMock = authAPI;

let state;

beforeEach(() => {
    state = {
        userId: '',
        login: '',
        name: '',
        surname: '',
        isAuth: false,
    };
})

it('user data must be set', () => {
    const authData = {
        userId: 1,
        login: 'user',
        name: 'John',
        surname: 'Doe',
    }

    let action = setUserData(authData.userId, authData.login, authData.name, authData.surname, true);

    let newState = authReducer(state, action);

    expect(newState).toStrictEqual({userId: 1, login: 'user', name: 'John', surname: 'Doe', isAuth: true});
});

it('auth data must be received', async () => {
    const apiResponse = {
        resultCode: 0,
        loginData: {
            id: 1,
            login: "user",
            name: "John",
            surname: "Doe"
        }
    }

    authAPIMock.me.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = getAuthUserData();
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,
        setUserData(
            apiResponse.loginData.id,
            apiResponse.loginData.login,
            apiResponse.loginData.name,
            apiResponse.loginData.surname,
            true
        ));
});

it('success login thunk', async () => {
    const apiResponse = {
        "resultCode": 0,
        "loginData": {
            "id": 1,
            "login": "user",
            "name": "John",
            "surname": "Doe"
        }
    }

    authAPIMock.login.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = login('user', jest.fn());
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, expect.any(Function));
});

it('unsuccessful login thunk', async () => {
    const apiResponse = {
        "resultCode": 1,
        "loginData": {
            "id": 1,
            "login": "user",
            "name": "John",
            "surname": "Doe"
        }
    }

    authAPIMock.login.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = login('nologin', jest.fn());
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(0);
});

it('success logout thunk', async () => {
    const apiResponse = {
        "resultCode": 0,
        "message": "OK"
    }

    authAPIMock.logout.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = logout();
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,
        setUserData(null, null, null, null, false));
});
