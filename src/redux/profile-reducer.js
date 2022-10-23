import users from "./users";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_FIELD = 'UPDATE-POST-FIELD';
const SET_POSTS = 'SET-POSTS';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SWITCH_ISFETCHING_STATUS = 'SWITCH-ISFETCHING-STATUS';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profileInfo: {
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
        case ADD_POST: {
            if (action.postContent === '') return;

            let newPost = {
                id: 5,
                author: {
                    name: users[0].name,
                    surname: users[0].surname,
                    avatar: users[0].avatar
                },
                message: action.postContent,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
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
                    fullname: action.fullname,
                    banner: action.banner,
                    avatar: action.avatar,
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

export const addPost = (postContent) => ({
    type: ADD_POST,
    postContent: postContent,
});
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts: posts,
});
export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
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
    profileAPI.getProfile(userId).then(data => {
        dispatch(switchIsFetchingStatus(false));
        dispatch(setPosts(data.posts));
        dispatch(setProfileInfo(data.items));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
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