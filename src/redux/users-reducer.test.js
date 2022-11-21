import {usersAPI} from "../api/api";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollowSuccess
} from "./users-reducer";
import profileReducer, {switchIsFetchingStatus} from "./profile-reducer";

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
    expect(profileReducer(state, falseAction).isFetching).toBeFalsy();
    expect(profileReducer(state, trueAction).isFetching).toBeTruthy();
});

it ('following progress must add and delete the userId in the followingInProgress array', () => {
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

