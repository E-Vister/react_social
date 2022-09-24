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
        case ADD_POST: {
            let text = state.newPostTextField;

            if (text === '') return;

            let newPost = {
                id: 5,
                author: users[0],
                message: text,
                likeCount: 0
            }

            let stateClone = {...state};
            stateClone.posts = [...state.posts];

            stateClone.posts.push(newPost);
            stateClone.newPostTextField = '';
            return stateClone;
        }
        case UPDATE_POST_FIELD: {
            let stateClone = {...state};
            stateClone.newPostTextField = action.text;
            return stateClone;
        }
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