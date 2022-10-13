const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    usersArray: [
    ],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
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
        case SET_TOTAL_USERS_COUNT: {
            if (!action.count) return;

            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case SET_CURRENT_PAGE: {
            if (!action.pageNumber) return;

            return {
                ...state,
                currentPage: action.pageNumber,
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

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
}

export default usersReducer;