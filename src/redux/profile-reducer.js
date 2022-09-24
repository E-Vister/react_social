import users from "./users";


const ADD_POST = 'ADD-POST';
const UPDATE_POST_FIELD = 'UPDATE-POST-FIELD';

let initialState = {
    posts: [
        {
            id: 1,
            author: users[1],
            message: `Hey. How are you feeling today?`,
            likeCount: 20
        },
        {
            id: 2,
            author: users[6],
            message: `I finished my album. Go check it out!`,
            likeCount: 34
        },
        {
            id: 3,
            author: users[3],
            message: `I'm going on a picnic. Do you wanna join?`,
            likeCount: 1
        },
    ],
    newPostTextField: '',
}

const profileReducer = (state = initialState, action) => {
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