import {users} from "./store";


let initialState = {
    friends: [
        users[1],
        users[2],
        users[3],
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;