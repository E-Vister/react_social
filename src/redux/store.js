import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

export let users = [
    {
        id: 0,
        name: `Jegoras`,
        surname: `Vistai`,
        avatar: `https://i.imgur.com/BSYRW9O.jpg`
    },
    {
        id: 1,
        name: `John`,
        surname: `Garner`,
        avatar: `https://i.imgur.com/ZeadwhP.png`
    },
    {
        id: 2,
        name: `Jane`,
        surname: `Heaton`,
        avatar: `https://i.imgur.com/Maz30rM.png`
    },
    {
        id: 3,
        name: `Alex`,
        surname: `Drake`,
        avatar: `https://i.imgur.com/uoOpu4n.png`
    },
    {
        id: 4,
        name: `Jakub`,
        surname: `Mathis`,
        avatar: `https://i.imgur.com/ronceF0.jpg`
    },
    {
        id: 5,
        name: `Elisabeth`,
        surname: `Plummer`,
        avatar: `https://i.imgur.com/wLTG7OH.jpg`
    },
    {
        id: 6,
        name: `Michael`,
        surname: `Smith`,
        avatar: `https://i.imgur.com/kDPcKlU.png`
    },
]

let store = {
    _state: {
        profile: {
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
        },
        dialogs: {
            dialogsArray: [
                {
                    id: 0, author: users[1], messages: [
                        {
                            id: 1,
                            messageText: 'Morning'
                        },
                        {
                            id: 2,
                            messageText: 'What about our business?'
                        }
                    ]
                },
                {
                    id: 1, author: users[2], messages: []
                },
                {
                    id: 2, author: users[3], messages: []
                },
                {
                    id: 3, author: users[4], messages: []
                },
                {
                    id: 4, author: users[5], messages: []
                },
            ],
            newMessageTextField: '',
        },
        navbar: {
            friends: [
                users[1],
                users[2],
                users[3],
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
}

export default store;