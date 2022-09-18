import {renderEntireTree} from "../render";

let users = [
    {
        id: 0,
        name: `Jegoras`,
        surname: `Vistai`,
        avatar: `https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8`
    },
    {
        id: 1,
        name: `John`,
        surname: `Garner`,
        avatar: `https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg`
    },
    {
        id: 2,
        name: `Jane`,
        surname: `Heaton`,
        avatar: `https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb`
    },
    {
        id: 3,
        name: `Alex`,
        surname: `Drake`,
        avatar: `https://sticker-collection.com/stickers/plain/johnnysinsbrazzers/512/c912f70a-f67f-4fe1-af3c-10b5c590047ffile_368359.webp`
    },
    {id: 4, name: `Jakub`, surname: `Mathis`, avatar: `https://m.media-amazon.com/images/I/61GLqTPhoJL._AC_UL400_.jpg`},
    {
        id: 5,
        name: `Elisabeth`,
        surname: `Plummer`,
        avatar: `https://blogforlife.org/wp-content/uploads/2022/05/post_0700_0_debora-lombardi-flower.jpg`
    },
    {
        id: 6,
        name: `Michael`,
        surname: `Smith`,
        avatar: `https://i.guim.co.uk/img/media/b3f9db5d504c00304c37724927b6e407da17c36b/0_197_5850_3511/master/5850.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=87966753ed0906994f60f72735295414`
    },
]

const state = {
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
    dialogs: [
        {id: 1, author: users[1]},
        {id: 2, author: users[2]},
        {id: 3, author: users[3]},
        {id: 4, author: users[4]},
        {id: 5, author: users[5]},
    ],
    navbar: {
        friends: [
            users[1],
            users[2],
            users[3],
        ]
    }
}

export const addPost = () => {
    let text = state.profile.newPostTextField;

    if (text === '') return;

    let newPost = {
        id: 5,
        author: users[0],
        message: text,
        likeCount: 0
    }

    state.profile.posts.push(newPost);
    renderEntireTree(state);
}

export const updatePostField = (text) => {
    state.profile.newPostTextField = text;
    renderEntireTree(state);
}

export default state;