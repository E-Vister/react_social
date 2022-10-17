const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SWITCH_ISFETCHING_STATUS = 'SWITCH-ISFETCHING-STATUS';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'

let initialState = {
    usersArray: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case SWITCH_ISFETCHING_STATUS: {
            if (action.status === undefined) return;

            return {
                ...state,
                isFetching: action.status,
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            if (action.isFetching === undefined || action.userId === undefined) return;

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        usersArray: users
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
}

export const switchIsFetchingStatus = (status) => {
    return {
        type: SWITCH_ISFETCHING_STATUS,
        status: status
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export default usersReducer;