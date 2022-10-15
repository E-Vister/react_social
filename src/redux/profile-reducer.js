import users from "./users";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_FIELD = 'UPDATE-POST-FIELD';
const SET_POSTS = 'SET-POSTS';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';

let initialState = {
    profileInfo: {
        fullname: '',
        banner: '',
        avatar: '',
        status: '',
        location: {
            city: '',
            state: '',
            county: '',
        },
    },
    posts: [],
    newPostTextField: '',
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
                        county: action.location.county,
                    },
                },
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

export default profileReducer;