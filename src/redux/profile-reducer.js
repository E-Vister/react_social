import {profileAPI} from "../api/api";

const SET_POSTS = 'react_social/profile/SET_POSTS';
const SET_PROFILE_INFO = 'react_social/profile/SET_PROFILE_INFO';
const SWITCH_ISFETCHING_STATUS = 'react_social/profile/SWITCH_ISFETCHING_STATUS';
const SET_STATUS = 'react_social/profile/SET_STATUS';

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

export const getProfile = (userId) => async (dispatch) => {
    dispatch(switchIsFetchingStatus(true));

    let getProfilePromise = await profileAPI.getProfile(userId);

    dispatch(setPosts(getProfilePromise.posts));
    dispatch(setProfileInfo(getProfilePromise.items));

    let getStatusPromise = dispatch(getStatus(userId));

    await Promise.all([getProfilePromise, getStatusPromise]).then(() => {
        dispatch(switchIsFetchingStatus(false));
    })
}
export const addPost = (message, profileId) => async (dispatch) => {
    const response = await profileAPI.addPost(message, profileId);

    if (response.resultCode === 0) {
        dispatch(setPosts(response.data.posts));
    }
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.value));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;