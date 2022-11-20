import profileReducer, {
    addPost,
    getProfile, getStatus, setPosts,
    setProfileInfo,
    setStatus,
    switchIsFetchingStatus, updateStatus
} from "./profile-reducer";
import {profileAPI} from "../api/api";

jest.mock('../api/api');

const profileAPIMock = profileAPI;

let state;

beforeEach(() => {
    state = {
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
})

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
    let expectedProfileInfo = {
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
    let actionProfileInfo = {
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

    let action = setProfileInfo(actionProfileInfo);

    let newState = profileReducer(state, action);

    expect(newState.profileInfo).toStrictEqual(expectedProfileInfo);
});

it('fetching status must be changed', () => {
    let falseAction = switchIsFetchingStatus(false);
    let trueAction = switchIsFetchingStatus(true);

    expect(state.isFetching).toBeFalsy();
    expect(profileReducer(state, falseAction).isFetching).toBeFalsy();
    expect(profileReducer(state, trueAction).isFetching).toBeTruthy();
});

it('new post must be added', async () => {
    let message = 'New Message';
    const profileId = 10;
    const apiResponse = {
        resultCode: 0,
        message: "OK",
        data: {
            posts: [
                {
                    id: 10,
                    author: {
                        name: "John",
                        surname: "Doe",
                        avatar: "https://someurl.com/avatar.png"
                    },
                    message: "New Message",
                    likeCount: 5
                }
            ]
        }
    };

    profileAPIMock.addPost.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = addPost(message, profileId);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setPosts(apiResponse.data.posts))
});

it('the profile must be received', async () => {
    const userId = 10;
    const apiResponse = {
        items: {
            id: 1,
            name: "John",
            surname: "Doe",
            avatar: "https://someurl.com/avatar.png",
            banner: "https://someurl.com/banner.png",
            status: "Some status",
            location: {
                city: "New York City",
                state: "NY",
                country: "United States"
            }
        },
        posts: [
            {
                id: 1,
                author: {
                    name: "Bob",
                    surname: "Anderson",
                    avatar: "https://someurl.com/avatar.png"
                },
                message: "Some message",
                likeCount: 5
            },
            {
                id: 2,
                author: {
                    name: "Robert",
                    surname: "Smith",
                    avatar: "https://someurl.com/avatar.png"
                },
                message: "Another some message",
                likeCount: 0
            }
        ]
    };

    profileAPIMock.getProfile.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = getProfile(userId);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(5);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, switchIsFetchingStatus(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setPosts(apiResponse.posts));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setProfileInfo(apiResponse.items));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, expect.any(Function));
    expect(dispatchMock).toHaveBeenNthCalledWith(5, switchIsFetchingStatus(false));
});

it('status must be received', async () => {
    const userId = 10;
    const apiResponse = {
        value: 'Some Status'
    }

    profileAPIMock.getStatus.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = getStatus(userId);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setStatus(apiResponse.value));
});

it('status must be updated', async () => {
    const newStatus = 'New Status';
    const apiResponse = {
        resultCode: 0,
        message: "OK"
    }

    profileAPIMock.updateStatus.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = updateStatus(newStatus);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setStatus(newStatus));
});
