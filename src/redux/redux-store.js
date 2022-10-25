import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;