import users from "./users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersArray: [
        users[0],
        users[1],
        users[2],
        users[3],
        users[4],
        users[5],
        users[6],
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersArray: state.usersArray.map(user => {
                    if (user.id === action.userId) return {...user, isFollowed: true}
                    return {...user}
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersArray: state.usersArray.map(user => {
                    if (user.id === action.userId) return {...user, isFollowed: false}
                    return {...user}
                })
            }
        }
        case SET_USERS: {
            if (!action.usersArray) return;

            return {
                ...state,
                usersArray: [...state.usersArray, action.usersArray],
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        usersArray: users
    }
}

export default usersReducer;