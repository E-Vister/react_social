import {profileAPI} from "../api/api";

const SET_POSTS = 'SET-POSTS';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SWITCH_ISFETCHING_STATUS = 'SWITCH-ISFETCHING-STATUS';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profileInfo: {
        id: '',
        fullname: '',
        banner: '',
        avatar: '',
        status: '',
        location: {
            city: '',
            state: '',
            country: '',
        },
    },
    posts: [],
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts,
            }
        }
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: {
                    id: action.id,
                    fullname: action.fullname,
                    banner: action.banner,
                    avatar: action.avatar,
                    status: action.status,
                    location: {
                        city: action.location.city,
                        state: action.location.state,
                        country: action.location.country,
                    },
                },
            }
        }
        case SWITCH_ISFETCHING_STATUS: {
            if (action.status === undefined) return;

            return {
                ...state,
                isFetching: action.status,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    status: action.userStatus
                }
            }
        }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts: posts,
});
export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
    id: profileInfo.id,
    fullname: `${profileInfo.name} ${profileInfo.surname}`,
    avatar: profileInfo.avatar,
    banner: profileInfo.banner,
    status: profileInfo.status,
    location: profileInfo.location,
});
export const switchIsFetchingStatus = (status) => {
    return {
        type: SWITCH_ISFETCHING_STATUS,
        status: status
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        userStatus: status
    }
}

export const getProfile = (userId) => (dispatch) => {
    dispatch(switchIsFetchingStatus(true));

    let getProfilePromise = profileAPI.getProfile(userId).then(data => {
        dispatch(setPosts(data.posts));
        dispatch(setProfileInfo(data.items));
    });
    let getStatusPromise = dispatch(getStatus(userId));

    Promise.all([getProfilePromise, getStatusPromise]).then(() => {
        dispatch(switchIsFetchingStatus(false));
    })
}
export const addPost = (message, profileId) => (dispatch) => {
    profileAPI.addPost(message, profileId).then(data => {
        dispatch(setPosts(data.data.posts))
    })
}
export const getStatus = (userId) => (dispatch) => {
     return profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data.value));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;