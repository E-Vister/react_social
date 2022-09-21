import {users} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_FIELD = 'UPDATE-POST-FIELD';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostTextField;

            if (text === '') return;

            let newPost = {
                id: 5,
                author: users[0],
                message: text,
                likeCount: 0
            }

            state.posts.push(newPost);
            state.newPostTextField = '';
            return state;
        case UPDATE_POST_FIELD:
            state.newPostTextField = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
});

export const updatePostFieldCreator = (text) => ({
    type: UPDATE_POST_FIELD,
    text: text,
});

export default profileReducer;