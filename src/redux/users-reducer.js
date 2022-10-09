const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersArray: [
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
                usersArray: action.usersArray,
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