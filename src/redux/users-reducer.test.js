import {usersAPI} from "../api/api";
import usersReducer, {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, unfollow,
    unfollowSuccess, switchIsFetchingStatus
} from "./users-reducer";

jest.mock('../api/api');

const usersAPIMock = usersAPI;

let state;

beforeEach(() => {
    state = {
        usersArray: [
            {
                id: 0,
                name: "John",
                surname: "Doe",
                avatar: "https://someurl.com/avatar.png",
                status: "Some status",
                location: {
                    city: "New York City",
                    state: "NY",
                    country: "United States"
                },
                isFollowed: false
            },
            {
                id: 1,
                name: "Bob",
                surname: "Anderson",
                avatar: "https://someurl.com/avatar.png",
                status: "Some status",
                location: {
                    city: "Dallas",
                    state: "TX",
                    country: "United States"
                },
                isFollowed: true
            }
        ],
        totalUsersCount: 0,
        pageSize: 4,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    };
});

it('action have to unfollow', () => {
    const userId = 1;
    const action = unfollowSuccess(1);

    const newState = usersReducer(state, action);

    expect(newState.usersArray[userId].isFollowed).toBeFalsy();
    expect(newState.usersArray[0].isFollowed).toBeFalsy();
});

it('action have to follow', () => {
    const userId = 1;
    const action = followSuccess(1);

    const newState = usersReducer(state, action);

    expect(newState.usersArray[userId].isFollowed).toBeTruthy();
    expect(newState.usersArray[0].isFollowed).toBeFalsy();
});

it('users must be set', () => {
    const users = [
        {
            id: 0,
            name: "John",
            surname: "Doe",
            avatar: "https://someurl.com/avatar.png",
            status: "Some status",
            location: {
                city: "New York City",
                state: "NY",
                country: "United States"
            },
            isFollowed: false
        },
        {
            id: 1,
            name: "Bob",
            surname: "Anderson",
            avatar: "https://someurl.com/avatar.png",
            status: "Some status",
            location: {
                city: "Dallas",
                state: "TX",
                country: "United States"
            },
            isFollowed: true
        },
        {
            id: 2,
            name: "User2",
            surname: "User2Surname",
            avatar: "https://someurl.com/avatar2.png",
            status: "Some status2",
            location: {
                city: "New York City",
                state: "NY",
                country: "United States"
            },
            isFollowed: true
        },
        {
            id: 3,
            name: "User3",
            surname: "User3Surname",
            avatar: "https://someurl.com/avatar3.png",
            status: "Some status3",
            location: {
                city: "Dallas",
                state: "TX",
                country: "United States"
            },
            isFollowed: false
        }
    ];

    const action = setUsers(users);

    const newState = usersReducer(state, action);

    expect(newState.usersArray.length).toBe(state.usersArray.length + 2);
});

it('users count must be set', () => {
   const totalUsersCount = 10;

   const action = setTotalUsersCount(totalUsersCount);

   const newState = usersReducer(state, action);

   expect(newState.totalUsersCount).toBe(totalUsersCount);
});

it('page number must be changed', () => {
    const page = 3;

    const action = setCurrentPage(page);

    const newState = usersReducer(state, action);

    expect(newState.currentPage).toBe(page);
});

it('fetching status must be changed', () => {
    const falseAction = switchIsFetchingStatus(false);
    const trueAction = switchIsFetchingStatus(true);

    expect(state.isFetching).toBeFalsy();
    expect(usersReducer(state, falseAction).isFetching).toBeFalsy();
    expect(usersReducer(state, trueAction).isFetching).toBeTruthy();
});

it ('action must add and delete the userId in the followingInProgress array', () => {
    const userId = 1;
    let newState

    const trueAction = toggleFollowingProgress(true, userId);
    const falseAction = toggleFollowingProgress(false, userId);

    expect(state.isFetching).toBeFalsy();
    expect(state.followingInProgress.length).toBe(0);

    newState = usersReducer(state, trueAction);

    expect(newState.followingInProgress.length).toBe(1);

    newState = usersReducer(state, falseAction);

    expect(newState.followingInProgress.length).toBe(0);
});

it('the users must be received and set', async () => {
    const apiResponse = {
        items: [
            {
                id: 2,
                name: "User2",
                surname: "User2Surname",
                avatar: "https://someurl.com/avatar2.png",
                status: "Some status2",
                location: {
                    city: "New York City",
                    state: "NY",
                    country: "United States"
                },
                isFollowed: true
            },
            {
                id: 3,
                name: "User3",
                surname: "User3Surname",
                avatar: "https://someurl.com/avatar3.png",
                status: "Some status3",
                location: {
                    city: "Dallas",
                    state: "TX",
                    country: "United States"
                },
                isFollowed: false
            }
        ],
        totalCount: 10
    }

    usersAPIMock.getUsers.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = getUsers(2, 2);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(4);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, switchIsFetchingStatus(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, switchIsFetchingStatus(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setUsers(apiResponse.items));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, setTotalUsersCount(apiResponse.totalCount));
});

it('success unfollow thunk', async () => {
    const userId = 1;
    const apiResponse = {
        resultCode: 0,
        followStatus: false,
        message: "OK"
    }

    usersAPIMock.unfollow.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = unfollow(userId);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, userId));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowSuccess(userId));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, userId));
});

it('success follow thunk', async () => {
    const userId = 0;
    const apiResponse = {
        resultCode: 0,
        followStatus: true,
        message: "OK"
    }

    usersAPIMock.follow.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = follow(userId);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, userId));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, followSuccess(userId));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, userId));
});

