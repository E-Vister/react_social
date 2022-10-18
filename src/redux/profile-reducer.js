import users from "./users";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_FIELD = 'UPDATE-POST-FIELD';
const SET_POSTS = 'SET-POSTS';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SWITCH_ISFETCHING_STATUS = 'SWITCH-ISFETCHING-STATUS';

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
    newPostTextField: '',
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostTextField;

            if (text === '') return;

            let newPost = {
                id: 5,
                author: {
                    name: users[0].name,
                    surname: users[0].surname,
                    avatar: users[0].avatar
                },
                message: text,
                likeCount: 0
            }

            return {
                ...state,
                newPostTextField: '',
                posts: [...state.posts, newPost],
            }
        }
        case UPDATE_POST_FIELD: {
            return {
                ...state,
                newPostTextField: action.text,
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
        default:
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST
});
export const updatePostField = (text) => ({
    type: UPDATE_POST_FIELD,
    text: text,
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

export const getProfile = (userId) => (dispatch) => {
    dispatch(switchIsFetchingStatus(true));
    usersAPI.getProfile(userId).then(data => {
        dispatch(switchIsFetchingStatus(false));
        dispatch(setPosts(data.posts));
        dispatch(setProfileInfo(data.items));
    });
}

export default profileReducer;