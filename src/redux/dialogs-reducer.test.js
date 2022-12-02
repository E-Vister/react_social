import dialogsReducer, {addMessage, setDialogs} from "./dialogs-reducer";
import {dialogsAPI} from "../api/api";

jest.mock('../api/api');

const dialogsAPIMock = dialogsAPI;

let state;

beforeEach(() => {
    state = {
        dialogsArray: []
    }
});

it('dialogs must be set', () => {
    const dialogs = [
        {
            "dialogId": 0,
            "members": [
                {
                    "id": 0,
                    "name": "John",
                    "surname": "Doe",
                    "avatar": "https://someurl.com/avatar.png"
                },
                {
                    "id": 1,
                    "name": "Bob",
                    "surname": "Smith",
                    "avatar": "https://someurl.com/avatar.png"
                }
            ],
            "messages": [
                {
                    "id": 0,
                    "authorId": 0,
                    "content": "Hey"
                },
                {
                    "id": 1,
                    "authorId": 1,
                    "content": "Hello"
                }
            ]
        },
        {
            "dialogId": 1,
            "members": [
                {
                    "id": 0,
                    "name": "John",
                    "surname": "Doe",
                    "avatar": "https://someurl.com/avatar.png"
                },
                {
                    "id": 2,
                    "name": "Carl",
                    "surname": "Johnson",
                    "avatar": "https://someurl.com/avatar.png"
                }
            ],
            "messages": [
                {
                    "id": 0,
                    "authorId": 0,
                    "content": "Hey"
                },
                {
                    "id": 1,
                    "authorId": 2,
                    "content": "Hello"
                }
            ]
        }
    ];
    const action = setDialogs(dialogs);

    const newState = dialogsReducer(state, action);

    expect(newState.dialogsArray.length).toBe(2);
});

it('new message must be added', async () => {
    let message = 'New Message';
    const dialogId = 1;
    const apiResponse = {
        resultCode: 0,
        dialogs: [
            {
                "dialogId": 0,
                "members": [
                    {
                        "id": 0,
                        "name": "John",
                        "surname": "Doe",
                        "avatar": "https://someurl.com/avatar.png"
                    },
                    {
                        "id": 1,
                        "name": "Bob",
                        "surname": "Smith",
                        "avatar": "https://someurl.com/avatar.png"
                    }
                ],
                "messages": [
                    {
                        "id": 0,
                        "authorId": 0,
                        "content": "Hey"
                    },
                    {
                        "id": 1,
                        "authorId": 1,
                        "content": "Hello"
                    }
                ]
            },
            {
                "dialogId": 1,
                "members": [
                    {
                        "id": 0,
                        "name": "John",
                        "surname": "Doe",
                        "avatar": "https://someurl.com/avatar.png"
                    },
                    {
                        "id": 2,
                        "name": "Carl",
                        "surname": "Johnson",
                        "avatar": "https://someurl.com/avatar.png"
                    }
                ],
                "messages": [
                    {
                        "id": 0,
                        "authorId": 0,
                        "content": "Hey"
                    },
                    {
                        "id": 1,
                        "authorId": 2,
                        "content": "Hello"
                    },
                    {
                        "id": 2,
                        "authorId": 0,
                        "content": "New Message"
                    }
                ]
            }
        ]
    };

    dialogsAPIMock.addMessage.mockReturnValue(Promise.resolve(apiResponse));

    const thunk = addMessage(dialogId, message);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setDialogs(apiResponse.dialogs))
});