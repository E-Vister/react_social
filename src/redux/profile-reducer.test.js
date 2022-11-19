import profileReducer, {setPosts, setProfileInfo, setStatus} from "./profile-reducer";

let state = {
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
};

it('status must be changed to action text', () => {
    let action = setStatus('New Status');

    let newState = profileReducer(state, action);

    expect(newState.profileInfo.status).toBe(action.userStatus);
});

it('posts must be set', () => {
    let posts = [
        {
            id: 1,
            author: {
                name: "John",
                surname: "Doe",
                avatar: null
            },
            message: "post1",
            likeCount: 1
        },
        {
            id: 2,
            author: {
                name: "Aaron",
                surname: "Smith",
                avatar: null
            },
            message: "post2",
            likeCount: 2
        },
    ]

    let action = setPosts(posts);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length + posts.length);
});

it('profile info must be set', () => {
    let profileInfo = {
        id: 10,
        fullname: 'John Doe',
        avatar: null,
        banner: null,
        status: 'Some status',
        location: {
            city: 'Las Vegas',
            state: 'Nevada',
            country: 'United States'
        }
    };
    let profileInfoToAction = {
        id: 10,
        name: 'John',
        surname: 'Doe',
        avatar: null,
        banner: null,
        status: 'Some status',
        location: {
            city: 'Las Vegas',
            state: 'Nevada',
            country: 'United States'
        }
    }

    let action = setProfileInfo(profileInfoToAction);

    let newState = profileReducer(state, action);

    expect(newState.profileInfo).toStrictEqual(profileInfo);
})
